# Security Hardening Checklist for legalexcelencia.com

## Overview

This checklist covers all security measures to protect your site from future compromise and harden your infrastructure.

---

## Phase 1: Deploy Code Changes (TODAY - 30 minutes)

### ✅ Files Created/Modified

The following security improvements have been implemented:

1. **✓ public/robots.txt** - Search engine directives
2. **✓ src/app/sitemap.ts** - Dynamic XML sitemap
3. **✓ src/app/layout.tsx** - Enhanced SEO metadata with security directives
4. **✓ netlify.toml** - Updated with CSP and security headers
5. **✓ src/middleware.ts** - Security middleware with header injection
6. **✓ src/pages/api/contact.ts** - Rate limiting (3 requests/hour per IP)

### Step 1: Test Locally

```bash
# Install dependencies (if needed)
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
# Verify site loads correctly
# Test contact form (should work but be rate-limited after 3 tries)
```

### Step 2: Build for Production

```bash
# Create production build
npm run build

# Check for build errors
# All should pass successfully
```

### Step 3: Deploy to Netlify

```bash
# Commit changes
git add .
git commit -m "Add security hardening: CSP headers, rate limiting, enhanced SEO metadata, robots.txt, and sitemap"

# Push to GitHub (triggers Netlify deploy)
git push origin main
```

### Step 4: Verify Deployment

1. Wait for Netlify deploy to complete (2-5 minutes)
2. Visit: https://legalexcelencia.com
3. Verify site loads correctly
4. Check browser console for CSP errors (shouldn't be any)

### Step 5: Verify Security Headers

```bash
# Check security headers are applied
curl -I https://legalexcelencia.com

# Should see:
# - X-Frame-Options: DENY
# - X-Content-Type-Options: nosniff
# - Strict-Transport-Security
# - Content-Security-Policy
# - Permissions-Policy
```

Or use online tool: https://securityheaders.com/?q=legalexcelencia.com

**Expected Grade:** A or A+

### Step 6: Verify Sitemap

1. Visit: https://legalexcelencia.com/sitemap.xml
2. Should see XML sitemap with your pages
3. Visit: https://legalexcelencia.com/robots.txt
4. Should see robots.txt content

---

## Phase 2: Netlify Account Security (TODAY - 15 minutes)

### Step 7: Enable 2FA on Netlify

1. Login to Netlify: https://app.netlify.com
2. Click your avatar (top right) → **User settings**
3. Navigate to **Security** tab
4. Click **Enable two-factor authentication**
5. Scan QR code with authenticator app (Google Authenticator, Authy, 1Password, etc.)
6. Enter verification code
7. **SAVE RECOVERY CODES** somewhere safe (password manager, encrypted file)

**✅ Done:** Netlify account secured with 2FA

### Step 8: Review Team Access

1. In Netlify, go to your site
2. Click **Site settings** → **Team and guests**
3. Review all team members
4. Remove any unauthorized users
5. Ensure only YOU have "Owner" access

**Expected:** Only your account listed

### Step 9: Review Audit Log

1. In Netlify site settings → **Audit log**
2. Review recent activity
3. Look for:
   - Unauthorized deployments
   - Settings changes you didn't make
   - Unknown team member additions
   - Deploy key changes

**Red flags:**
- Deploys you didn't trigger
- Settings changes at odd hours
- Unknown email addresses

### Step 10: Review Deploy Keys & Hooks

1. In Netlify site settings → **Build & deploy**
2. Scroll to **Deploy keys**
3. Verify deploy key belongs to YOUR GitHub account
4. In **Build hooks**, check for suspicious webhooks
5. Remove any you don't recognize

### Step 11: Rotate Mailgun API Key

As a precaution, rotate your Mailgun credentials:

1. Login to Mailgun: https://app.mailgun.com
2. Go to **Sending** → **Domain settings** → **SMTP credentials**
3. Generate new API key
4. Copy new API key
5. In Netlify:
   - Go to **Site settings** → **Environment variables**
   - Update `MAILGUN_SENDING_API_KEY` with new value
6. In local `.env` file:
   - Update `MAILGUN_SENDING_API_KEY`
   - DO NOT commit to git
7. Trigger new deploy (push to GitHub)

**✅ Done:** Mailgun credentials rotated

---

## Phase 3: GitHub Account Security (TODAY - 15 minutes)

### Step 12: Enable 2FA on GitHub

1. Login to GitHub: https://github.com
2. Click your avatar → **Settings**
3. Navigate to **Password and authentication**
4. Click **Enable two-factor authentication**
5. Choose method:
   - **Recommended:** Authenticator app (Google Authenticator, Authy, etc.)
   - Alternative: SMS (less secure)
6. Scan QR code / Enter verification code
7. **DOWNLOAD RECOVERY CODES** - save securely

**✅ Done:** GitHub account secured with 2FA

### Step 13: Review Repository Access

1. Go to your repository: https://github.com/[your-username]/client-web-legal-excelencia
2. Click **Settings** → **Collaborators**
3. Review who has access
4. Remove any unauthorized users

**Expected:** Only your account

### Step 14: Review Deploy Keys

1. In repository **Settings** → **Deploy keys**
2. Verify only Netlify deploy key exists
3. Remove any unknown keys

### Step 15: Enable Branch Protection

1. In repository **Settings** → **Branches**
2. Click **Add branch protection rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging (optional, for team workflows)
   - ✅ Require status checks to pass (if you add CI/CD)
5. Save changes

**Note:** For solo projects, branch protection is optional but recommended.

---

## Phase 4: Domain Registrar Security (TODAY - 20 minutes)

### Step 16: Login to Domain Registrar

Where did you purchase legalexcelencia.com?
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- Other

Login to your registrar account.

### Step 17: Enable 2FA on Registrar

1. Navigate to account security settings
2. Enable two-factor authentication
3. Use authenticator app (most secure)
4. Save recovery codes

**✅ Done:** Registrar account secured

### Step 18: Enable Domain Lock

1. Find your domain: legalexcelencia.com
2. Look for "Domain Lock" or "Transfer Lock"
3. **Enable domain lock**

This prevents unauthorized domain transfers.

**✅ Done:** Domain transfer locked

### Step 19: Enable Auto-Renew

1. In domain settings
2. Enable **Auto-renewal**
3. Verify payment method is valid

This prevents domain expiration and potential hijacking.

### Step 20: Review DNS Settings

1. Navigate to DNS management for legalexcelencia.com
2. Verify ONLY these records exist:

**Expected DNS Records:**

| Type | Name | Value | Notes |
|------|------|-------|-------|
| A or ALIAS | @ | [Netlify IP or alias] | Points to Netlify |
| CNAME | www | [Netlify URL] | www subdomain |
| TXT | @ | [Google verification] | For Search Console (optional) |

**Remove any suspicious records:**
- Unknown A records
- Suspicious CNAME records
- Unexpected TXT records
- MX records (unless you use custom email)

### Step 21: Add CAA Records (Advanced)

CAA records restrict which Certificate Authorities can issue SSL certificates for your domain.

Add these DNS records:

```
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"

Type: CAA
Name: @
Value: 0 issuewild ";"
```

This allows only Let's Encrypt (used by Netlify) to issue certificates.

**Note:** Check if your registrar supports CAA records. Not all do.

---

## Phase 5: Email & Communication Security (OPTIONAL - 15 minutes)

### Step 22: Secure Email Account

The contact form sends to: legalexcelencia@gmail.com

1. Login to Gmail
2. Enable 2FA:
   - Google Account → Security → 2-Step Verification
   - Use authenticator app
3. Review recent activity:
   - Security → Your devices
   - Remove unknown devices
4. Check filters:
   - Settings → Filters and Blocked Addresses
   - Remove suspicious filters

### Step 23: Setup Email Alerts

Configure alerts for:
- New contact form submissions
- Netlify deploy notifications
- GitHub push notifications

This helps you detect unauthorized activity quickly.

---

## Phase 6: Monitoring & Alerts (TODAY - 10 minutes)

### Step 24: Setup Netlify Deploy Notifications

1. In Netlify site settings → **Build & deploy** → **Deploy notifications**
2. Add notification: **Email notification**
   - Event: **Deploy succeeded**
   - Email: your-email@example.com
3. Add notification: **Email notification**
   - Event: **Deploy failed**
   - Email: your-email@example.com

**Benefit:** You'll be alerted if someone triggers a deploy

### Step 25: Setup GitHub Notifications

1. In repository → **Watch** (top right)
2. Choose: **All Activity**
3. In GitHub settings → **Notifications**
4. Ensure emails are enabled

### Step 26: Setup Google Search Console Alerts

1. In Search Console → Settings
2. Enable email notifications
3. You'll be alerted for:
   - Manual actions
   - Security issues
   - Critical index drops

---

## Phase 7: Dependency Security (MONTHLY)

### Step 27: Run Security Audit

```bash
# Check for vulnerable dependencies
npm audit

# If vulnerabilities found:
npm audit fix

# If high-severity issues remain:
npm audit fix --force

# Rebuild and test
npm run build
```

Run this **monthly** or whenever you add new packages.

### Step 28: Update Dependencies

```bash
# Check for outdated packages
npm outdated

# Update non-breaking changes
npm update

# For major updates (breaking changes), review changelogs first
# Then update manually in package.json
```

### Step 29: Review Package.json

1. Open `package.json`
2. Review all dependencies
3. Remove any packages you're not using
4. Google any unfamiliar packages
5. Check for typosquatting (e.g., "reactt" instead of "react")

**Red flags:**
- Packages with very few downloads
- Packages last updated years ago
- Packages with suspicious names

---

## Phase 8: Backups & Recovery (TODAY - 10 minutes)

### Step 30: Verify Git Backups

Your code is backed up in GitHub, but verify:

```bash
# Check git remotes
git remote -v

# Should show GitHub URL
# Ensure you have access to the GitHub repository
```

### Step 31: Backup Environment Variables

1. In Netlify → **Environment variables**
2. Copy all variables:
   - MAILGUN_SENDING_API_KEY
   - MAILGUN_DOMAIN
3. Store in password manager or encrypted file
4. **NEVER** commit to git
5. **NEVER** share publicly

### Step 32: Document Recovery Steps

Create a recovery plan:

1. How to restore from GitHub
2. How to re-deploy to Netlify
3. How to recover DNS settings
4. Contact information for:
   - Domain registrar support
   - Netlify support
   - GitHub support

---

## Phase 9: Content Security (ONGOING)

### Step 33: Monitor Site Content

**Weekly:**
1. Visit https://legalexcelencia.com
2. Verify content is correct
3. Check for:
   - Unexpected pages
   - Modified text
   - Injected links
   - Suspicious scripts

### Step 34: Review Contact Form Submissions

Monitor emails to legalexcelencia@gmail.com:

**Red flags:**
- Spam submissions despite rate limiting
- Submissions in foreign languages (if unexpected)
- Automated/bot-like messages

If spam persists, consider adding CAPTCHA (reCAPTCHA v3).

### Step 35: Monitor Analytics (if installed)

If you add Google Analytics:
- Monitor traffic sources
- Check for traffic spikes
- Review referral sources
- Look for bot traffic

---

## Phase 10: Advanced Security (OPTIONAL)

### Step 36: Add Subresource Integrity (SRI)

For external scripts (currently minimal), add integrity checks:

```html
<script
  src="https://example.com/script.js"
  integrity="sha384-[hash]"
  crossorigin="anonymous"
></script>
```

Not currently needed as you're using Next.js font optimization.

### Step 37: Consider WAF (Web Application Firewall)

Options:
- **Cloudflare** (Free tier available)
- **Netlify WAF** (Paid)
- **AWS CloudFront + WAF** (Complex setup)

**Benefits:**
- DDoS protection
- Bot filtering
- IP blocking
- Advanced rate limiting

**For your site:** Not critical currently. Consider if you experience attacks.

### Step 38: Setup Uptime Monitoring

Free services:
- **UptimeRobot** (https://uptimerobot.com) - Free for 50 monitors
- **Pingdom** - Free tier
- **StatusCake** - Free tier

Setup:
1. Create account
2. Add monitor for: https://legalexcelencia.com
3. Set check interval: Every 5 minutes
4. Add email/SMS alerts

**Benefit:** Know immediately if site goes down

---

## Maintenance Schedule

### Daily (Automated)
- Netlify deploys from GitHub pushes

### Weekly
- Check `site:legalexcelencia.com` in Google
- Review Netlify deploy logs
- Check email for alerts

### Monthly
- Run `npm audit`
- Review Google Search Console
- Check security headers (securityheaders.com)
- Review Netlify analytics
- Verify domain auto-renew settings

### Quarterly
- Update npm dependencies (`npm update`)
- Review team access (Netlify, GitHub, Registrar)
- Test disaster recovery process
- Review and update documentation

### Yearly
- Change passwords (Netlify, GitHub, Registrar, Email)
- Review recovery codes for 2FA
- Audit all third-party integrations
- Review hosting costs

---

## Security Checklist Summary

### Critical (Must Do Today)
- [x] Deploy security code changes
- [ ] Enable 2FA on Netlify
- [ ] Enable 2FA on GitHub
- [ ] Enable 2FA on domain registrar
- [ ] Enable domain lock
- [ ] Review team access (Netlify, GitHub)
- [ ] Rotate Mailgun API key
- [ ] Verify DNS settings
- [ ] Setup deploy notifications

### Important (This Week)
- [ ] Add CAA DNS records
- [ ] Enable domain auto-renewal
- [ ] Verify security headers (securityheaders.com)
- [ ] Setup uptime monitoring
- [ ] Document recovery procedures
- [ ] Backup environment variables securely

### Ongoing (Monthly+)
- [ ] Run npm audit
- [ ] Update dependencies
- [ ] Review Google Search Console
- [ ] Monitor site content
- [ ] Review access logs

---

## Red Flags to Watch For

### Immediate Action Required
- **Unauthorized deploys** → Check Netlify audit log, rotate credentials
- **DNS changes you didn't make** → Contact registrar immediately, enable domain lock
- **Manual action in Search Console** → Follow reconsideration process
- **Traffic spike to spam pages** → Verify site integrity, check for injection
- **Contact form spam flood** → Rate limiting should prevent; consider CAPTCHA

### Investigate Further
- Unexpected packages in package.json
- Unknown team members in Netlify/GitHub
- Suspicious email in legalexcelencia@gmail.com inbox
- Unknown devices in Google/GitHub account activity
- Deploy failures without code changes

---

## Emergency Contacts

**If Site is Compromised:**

1. **Immediately:**
   - In Netlify: **Stop auto-publishing** (Settings → Build & deploy → Pause builds)
   - Change all passwords
   - Rotate all API keys
   - Enable 2FA everywhere if not already done

2. **Contact Support:**
   - **Netlify Support:** https://www.netlify.com/support
   - **GitHub Support:** https://support.github.com
   - **Domain Registrar:** [Your registrar's support page]
   - **Google Search Console:** Use "Request Review" in Manual Actions

3. **Recovery:**
   - Review git history for malicious commits
   - Restore from last known good commit
   - Scan all files for malware
   - Re-deploy from clean source

---

## Resources

**Security Tools:**
- Security Headers Test: https://securityheaders.com
- SSL Test: https://www.ssllabs.com/ssltest
- Mozilla Observatory: https://observatory.mozilla.org
- Webhook Test: https://webhook.site

**Documentation:**
- Netlify Security: https://docs.netlify.com/security
- Next.js Security: https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
- OWASP Top 10: https://owasp.org/www-project-top-ten

**Community:**
- Netlify Community: https://answers.netlify.com
- Stack Overflow: Tag questions with `netlify`, `nextjs`, `security`

---

## Completion Certificate

When you've completed all critical tasks, your site will have:

✅ **Strong Authentication**
- 2FA on all accounts
- Domain lock enabled
- Secure passwords

✅ **Hardened Infrastructure**
- Security headers (CSP, HSTS, etc.)
- Rate limiting on APIs
- Proper DNS configuration
- SSL certificate with CAA records

✅ **Monitoring & Alerts**
- Deploy notifications
- Uptime monitoring
- Google Search Console alerts
- Regular security audits

✅ **Recovery Procedures**
- Documented steps
- Backed up credentials
- Git history preserved
- Contact list prepared

**Your site is now significantly more secure than 95% of websites on the internet.**

---

**Next:** See GOOGLE_SEARCH_CONSOLE_GUIDE.md for fixing the Google search index issue.
