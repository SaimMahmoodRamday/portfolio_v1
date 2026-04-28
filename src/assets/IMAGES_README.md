# How to Add Your Images

| What | File Path | Notes |
|------|-----------|-------|
| Profile photo | src/assets/profile.jpg | 400x400px min, square. Replace placeholder div in Hero.jsx |
| Project Inspector | src/assets/project-inspector.jpg | Download from GitHub repo /assets/projectinspectorgit.jpg |
| VisionSlice | src/assets/vision-slice.jpg | Download from GitHub repo /assets/visionslicegit.png |
| Medical Search Engine | src/assets/medical-search.jpg | Download from GitHub repo /assets/searchenginegit.jpg |

After adding images, import them at the top of the relevant component:
```jsx
import profilePhoto from '../assets/profile.jpg'
```
Then replace the placeholder div with:
```jsx
<img src={profilePhoto} alt="Saim Mahmood" className="w-full h-full object-cover rounded-2xl" />
```
