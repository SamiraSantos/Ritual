# Ritual MVP público

Este pacote contém apenas o build estático do frontend do Ritual para testes e visualização.

## O que está incluído

- HTML, CSS, JavaScript minificado e assets públicos gerados por Vite.
- Nenhum código TypeScript/React original.
- Nenhuma migration, Edge Function, script interno, Android project ou documentação privada.
- Nenhum arquivo .env.

## Como publicar

Use o conteúdo desta pasta como a raiz de um repositório público separado.

```bash
git init
git add .
git commit -m "deploy: publica mvp visual do ritual"
git branch -M main
git remote add origin URL_DO_REPOSITORIO_PUBLICO
git push -u origin main
```

Depois, ative GitHub Pages, Netlify, Vercel ou outro host estático apontando para a raiz do repositório.

## Segurança

O backend do Ritual deve continuar privado. Qualquer regra sensível precisa permanecer em Supabase RLS, RPCs seguras ou Edge Functions.

Importante: todo frontend publicado na web entrega JavaScript ao navegador. Este pacote evita expor o código fonte e o backend do repositório, mas a segurança real depende do backend não confiar no client.
