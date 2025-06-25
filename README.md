# YouTube Transcript API

A REST API endpoint that extracts transcripts from YouTube videos. This API supports multiple languages and returns structured transcript data with timestamps.

 

## 📋 Table of Contents

- [Demo](#demo) 
- [Usage](#usage)
- [API Reference](#api-reference)
- [Response Format](#response-format)
- [Error Handling](#error-handling) 
- [Contributing](#contributing)
- [License](#license)

## 🌐 Demo

Try the API: `https://your-deployment-url.vercel.app/api/transcript`


## 📖 Usage

### Basic Request

```bash
GET /api/transcript?url=https://www.youtube.com/watch?v=VIDEO_ID
```

### With Language Parameter

```bash
GET /api/transcript?url=https://www.youtube.com/watch?v=VIDEO_ID&lang=hi
```
 
## 📚 API Reference

### Endpoint

```
GET /api/transcript
```

### Query Parameters

| Parameter | Type   | Required | Default | Description |
|-----------|--------|----------|---------|-------------|
| `url`     | string | Yes      | -       | YouTube video URL (supports both youtube.com and youtu.be formats) |
| `lang`    | string | No       | `en`    | Language code for transcript (e.g., 'en', 'hi', 'es', 'fr') |

### Supported URL Formats

- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`

## 📊 Response Format

### Success Response

```json
{
  "transcript": [
    {
      "text": "आपको पता है आप में और फेमस ब्लॉगर्स में",
      "startMs": "80",
      "endMs": "2440"
    },
    {
      "text": "सबसे बड़ा डिफरेंस क्या है कि जो फेमस",
      "startMs": "2440", 
      "endMs": "4319"
    }
  ]
}
```

### Response Fields

| Field     | Type   | Description |
|-----------|--------|-------------|
| `text`    | string | The transcript text segment |
| `startMs` | string | Start time in milliseconds |
| `endMs`   | string | End time in milliseconds |

## ⚠️ Error Handling

### Error Response Format

```json
{
  "error": "Error message description"
}
```

 
 
 
 

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 
## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact [mhsiam121@gmail.com](mailto:mhsiam121@gmail.com).

---

Made with ❤️ by [MD Mainul Hasan](https://github.com/notAvailable73)