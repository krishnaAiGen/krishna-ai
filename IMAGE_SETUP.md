# Image Setup Guide

## Profile Images Setup

You have provided the following Google Drive links for images:

1. **Profile Picture**: https://drive.google.com/file/d/14qyYk2HxaA-RLN0Tf7vr9eSGh_QWsTB1/view?usp=sharing
2. **INFOCOM 2025 Workshop Session Chair London**: https://drive.google.com/file/d/1NBJR2bQLp8je8vvza-bPWiQ37XYBpUcV/view?usp=sharing
3. **Federated Learning Speech Video**: https://drive.google.com/file/d/1npYmUj-do5ECPrMu305WSToK8G_KscNF/view?usp=sharing
4. **Resume**: https://drive.google.com/file/d/1gRmvZ4FAUBxTI8S8JmyTvEz4-i0sAlGn/view?usp=sharing
5. **IREC Award Photo**: https://drive.google.com/file/d/10c4hc7yYKRRws-8MMc57qDtkB2n4k9z-/view?usp=sharing

## Social Media Links

- **Solana MCP Tweet with Video**: https://x.com/joi_n9911/status/1900967070260396313

## How to Add Images

### Step 1: Download Images from Google Drive

1. Click on each Google Drive link
2. Click "Download" to save the images to your computer
3. Rename the files as follows:
   - Profile picture → `profile.jpg`
   - INFOCOM session chair image → `infocom-session-chair.jpg`
   - Federated learning speech → `federated-learning-speech.mp4` (if video) or `.jpg` (if image)
   - IREC award photo → `irec-award.jpg`

### Step 2: Add Images to Project

1. Copy the downloaded images to the `public/images/` folder in your portfolio project
2. The folder structure should look like:
   ```
   portfolio/
   ├── public/
   │   └── images/
   │       ├── profile.jpg
   │       ├── infocom-session-chair.jpg
   │       ├── federated-learning-speech.jpg
   │       └── irec-award.jpg
   ```

### Step 3: Verify Images

1. Start the development server: `npm run dev`
2. Open http://localhost:3000
3. Your profile picture should now appear in the Hero section
4. The IREC award photo will appear in the Awards section
5. The other images can be added to relevant sections as needed

## Updates Made

### ✅ Resume Link Added
- Added a green "View Resume" button in the Hero section
- Links directly to your Google Drive resume

### ✅ AAAI Paper Status Updated
- Changed from "Accepted" to "Published" in both Publications and Research sections

### ✅ IREC Award Photo Integration
- Added image display capability in the Awards section
- The IREC award photo will show as a rectangular image below the award description

### ✅ Solana Tweet Integration
- Added a special tweet link section for the Solana MCP hackathon award
- Links to your Twitter post with the video

## Alternative: Direct Image URLs

If you prefer to host images elsewhere, you can:

1. Upload images to a service like Cloudinary, AWS S3, or GitHub
2. Update the image paths in the components to use the direct URLs
3. For example, in `Hero.tsx`, change:
   ```jsx
   src="/images/profile.jpg"
   ```
   to:
   ```jsx
   src="https://your-image-hosting-service.com/profile.jpg"
   ```

## Notes

- The profile image is currently set up in the Hero component
- The IREC award image will display as a short rectangle in the Awards section
- The INFOCOM session chair image could be added to the Awards section
- The Federated Learning speech video could be embedded in the Research section
- The Solana tweet is linked in the Awards section
- All images should be optimized for web (compressed, appropriate size)
- Recommended image sizes:
  - Profile picture: 400x400px (square)
  - IREC award photo: 800x200px (rectangular)
  - Other images: 1200px width maximum 