# Areeba Asghar Portfolio — Supabase, GitHub & Vercel

## Important before publishing
This project has been detached from the previous owner's Supabase project. You must create your own Supabase project and use its URL and publishable/anon key. The browser config must never contain a `service_role` or secret key.

## 1. Create your Supabase project
1. Sign in at https://supabase.com and create a new project.
2. Save the database password somewhere secure.
3. In Project Settings → API (or API Keys), copy the Project URL and the publishable key (or legacy anon public key).
4. Open `js/supabase-config.js` and replace the two placeholder strings with those values.

## 2. Create the database
1. In Supabase, open SQL Editor → New query.
2. Copy and run the complete contents of `backend/supabase.sql`.
3. In Authentication → Users, create your own admin user with your email and a strong password.
4. Open that user and copy its UUID.
5. In SQL Editor run this statement, replacing the placeholder with your own UUID:

```sql
insert into public.admin_users (user_id)
values ('YOUR-AUTH-USER-UUID')
on conflict (user_id) do nothing;
```

6. Run `backend/seed-portfolio.sql` once to add the initial Areeba portfolio content.

## 3. Local test
Do not open HTML files directly using `file://`. Open the project folder in VS Code, install/enable the Live Server extension, right-click `index.html`, and choose **Open with Live Server**. Test public pages, contact form, and `admin.html`. Sign in using the admin email/password created in Supabase Authentication.

## 4. Upload to GitHub
1. Create/sign in to https://github.com.
2. Create a new repository, for example `areeba-portfolio`.
3. Extract this ZIP. In the extracted project folder, open a terminal.
4. Run:

```bash
git init
git add .
git commit -m "Add Areeba portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/areeba-portfolio.git
git push -u origin main
```

You can also use GitHub Desktop if you prefer a graphical interface. Do not upload passwords, service-role keys, or private credentials.

## 5. Deploy on Vercel
1. Sign in at https://vercel.com using GitHub.
2. Choose **Add New → Project**, import your `areeba-portfolio` repository.
3. For this static HTML/CSS/JS site, leave Framework Preset as **Other**. Leave Build Command and Output Directory empty/default; do not add a build step.
4. Click **Deploy**. Vercel will provide a public `*.vercel.app` URL.
5. Whenever you push changes to the GitHub `main` branch, Vercel will redeploy automatically.

## 6. Final checks
- Visit the Vercel URL and check every page.
- Check that the browser console has no Supabase configuration errors.
- Test the contact form and admin sign-in.
- Add your real email, LinkedIn, GitHub, and other links in the Admin Panel → Contact.
- Add your own profile photo and project screenshots. The previous portfolio owner's profile photo was removed.
- The public website reads portfolio content from Supabase; Admin Panel changes are saved there.

## Notes
- The seed SQL is intended to be run once. Running it again overwrites the `main` portfolio content with the starter content.
- The SQL script configures a public read-only portfolio, authenticated admin editing, contact-message submission, and a public `portfolio-images` storage bucket with admin-only uploads.
- NeuroCast is described as a research project, not a clinical diagnostic product.
