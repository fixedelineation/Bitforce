CA-32 Financial Privacy Action Center - Deploy

Files:
- index.html — main single-page site.
- .nojekyll — ensure GitHub Pages serves files raw.

Deploy to GitHub Pages:
1. Create a new repository on GitHub and upload the files in this deploy/ folder to the repository root.
2. In the repository Settings → Pages, set the Source branch to main (or the branch you uploaded to) and folder to root (/).
3. After GitHub builds the site, it will be available at https://<username>.github.io/<repo>/

Note: index.html references Tailwind via CDN; internet access required.
