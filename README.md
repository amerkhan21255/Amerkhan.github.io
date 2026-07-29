# Aapki Portfolio Website — Kaise Use Karein

Ye ek 5-page website hai jo aapke resume se banayi gayi hai:
- `index.html` — Home
- `about.html` — About, Certifications, Education
- `experience.html` — Career Timeline & Skills
- `gallery.html` — Activities (illustrated) + Real Experiment Videos
- `contact.html` — Contact Details

## Jo already daala hua hai

- **Aapki photo**: resume ke andar jo photo thi (`images/amer-khan-photo.png`), wo `about.html`
  par already lagi hui hai.
- **10 real experiment videos**: gallery page par har video card real YouTube demonstration se
  linked hai (Ohm's Law, Prism refraction, Pendulum, Newton's Laws, Titration, Electromagnet,
  Resonance, Density Tower, PhET walkthrough) — click karte hi play ho jayega. Ye reference/
  teaching-resource videos hain, aapki khud ki recording nahi — isliye har video ke niche
  chota label bhi diya hai.
- **9 activity illustrations**: kyunki aapki asli classroom ki photos mere paas nahi thi,
  maine random stock photos ya kisi anjaan student ki photo lagane ki jagah khud diagrams
  banaye hain (circuit, prism, pendulum, titration, density tower, PhET screen, static
  electricity, group lab, science fair) — taaki website me kuch bhi galat impression na de.

## Apni asli photos add karna (jab bhi ready ho)

`gallery.html` me jis bhi `<div class="gal-tile">...</div>` ko real photo se replace karna
ho, use is tarah se badlein:

```html
<div class="gal-tile" style="background-image:url('images/circuit-activity.jpg');
     background-size:cover;background-position:center;">
</div>
```

1. `images` folder me apni photo daalein.
2. Us specific tile ka code upar wale format me replace kar dein, filename apna daalein.

Naya main photo badalna ho (about.html), to bas `images/amer-khan-photo.png` ki jagah
apni nayi photo isi naam se ya naya filename dekar `src="images/..."` update kar dein.

## Apne khud ke experiment videos add karna

Jab aap apni khud ki class ki video record kar lein aur YouTube (unlisted/public) par daal
dein, to `gallery.html` me us video tile ke andar:

```html
<div class="video-thumb" data-video-id="YOUR_VIDEO_ID" data-title="Apna title">
  <img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/hqdefault.jpg" alt="" loading="lazy">
  <span class="play"></span>
</div>
```

`YOUR_VIDEO_ID` apne YouTube link se lein (link ka `v=` ke baad wala part).

## Text edit karna

Har page ek simple HTML file hai — kisi bhi text editor (Notepad, VS Code) me kholkar
seedha text change kar sakte hain. Design (colors, fonts, spacing) `style.css` me hai.

## Website ko online publish karna (free options)

- **Netlify Drop** (app.netlify.com/drop) — poore `physics-portfolio` folder ko drag-drop
  karke seconds me live shareable link mil jata hai. Schools ko bhejne ke liye sabse fast.
- **GitHub Pages** — free, thoda technical setup chahiye but permanent custom link.

## Zaroori baat

- Site me kahin bhi date of birth ya nationality nahi dala gaya hai — public website par
  share karna zaroori nahi. School specifically maange to wo resume/CV me hi dena behtar hai.
- Reference videos ke sources: NCSSM CORE Collection, MIT K12 Videos (Creative Commons),
  aur teaching-demo channels — sab publicly embeddable YouTube content hai, koi copyrighted
  material directly reproduce nahi kiya gaya.
