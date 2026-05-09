-- ============================================================
-- FitPro — Supabase Schema (executar no SQL Editor do Supabase)
-- ============================================================

-- 1. Tabela principal: dados de cada perfil
CREATE TABLE IF NOT EXISTS user_data (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  profile_key TEXT NOT NULL CHECK (profile_key IN ('miguel', 'tania')),
  data JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, profile_key)
);

-- 2. Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_user_data_updated_at ON user_data;
CREATE TRIGGER trg_user_data_updated_at
  BEFORE UPDATE ON user_data
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 3. Row Level Security (cada utilizador vê apenas os seus dados)
ALTER TABLE user_data ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Select own data" ON user_data;
CREATE POLICY "Select own data" ON user_data
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Insert own data" ON user_data;
CREATE POLICY "Insert own data" ON user_data
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Update own data" ON user_data;
CREATE POLICY "Update own data" ON user_data
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Delete own data" ON user_data;
CREATE POLICY "Delete own data" ON user_data
  FOR DELETE USING (auth.uid() = user_id);
