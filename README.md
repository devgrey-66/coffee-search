# ☕ Coffee Search App

A modern **Next.js** application to help users discover nearby coffee shops using real-time data from the **Foursquare Places API** and beautiful photos from the **Unsplash API**.

Built with scalability and performance in mind, this app is a great foundation for location-based services.

---

## 🔗 Live Demo

Coming soon!

---

## 🧹 Features

* 🔍 Search coffee shops in any location
* 🌍 Geolocation-based search support
* 🖼 Fetch coffee shop images using Unsplash API
* 🚀 Built on Next.js with TypeScript
* ⚙️ API integration using Axios
* 🩼 Responsive UI with Tailwind CSS (optional)
* 🔒 Secure environment configuration with `.env.local`

---

## 🏠 Tech Stack

| Technology     | Description                      |
| -------------- | -------------------------------- |
| Next.js        | React Framework with SSR support |
| TypeScript     | Type-safe JavaScript             |
| Axios          | Promise-based HTTP client        |
| Foursquare API | Coffee shop data                 |
| Unsplash API   | Coffee-related images            |
| Tailwind CSS   | Utility-first styling (optional) |

---

## 📂 Project Structure

```
coffee-search/
├── components/          # Reusable components
├── lib/                 # API utility functions
├── pages/               # Next.js routing pages
│   └── index.tsx        # Home page
├── public/              # Static files (icons, etc.)
├── styles/              # Global CSS (if any)
├── .env.local           # Local env vars (ignored)
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/devgrey-66/coffee-search.git
cd coffee-search
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FOURSQUARE_API_KEY=your_foursquare_api_key
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

> ❟️ `.env.local` is automatically excluded from version control.

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 API Usage

### 📍 Foursquare Places API

Used to fetch real-time data about coffee shops:

* Endpoint: `https://api.foursquare.com/v3/places/search`
* Required Header: `Authorization: ${YOUR_API_KEY}`

Docs: [https://developer.foursquare.com/docs/places-api/](https://developer.foursquare.com/docs/places-api/)

---

### 🖼 Unsplash API

Used to fetch images related to coffee or specific shop names:

* Endpoint: `https://api.unsplash.com/search/photos`
* Requires: `client_id` as query parameter

Docs: [https://unsplash.com/documentation](https://unsplash.com/documentation)

---

---

## ✅ Best Practices

* 🔒 Never expose sensitive environment variables publicly.
* 🩼 Clean code structure with clear separation of concerns.
* 📁 Keep API utilities in `lib/` and reusable UI in `components/`.

---

## 🚀 Deployment (Optional)

You can deploy this app easily to [Vercel](https://vercel.com/) with just a few clicks:

1. Push your code to GitHub
2. Go to Vercel and import the repository
3. Add the same environment variables (`.env.local`) in the Vercel dashboard
4. Click **Deploy**

---

## 👨‍💼 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📜 License

M
