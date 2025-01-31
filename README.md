 HNG12 Public API

 Overview
A simple public API that returns:
- Your registered email on HNG12 Slack
- The current datetime in ISO 8601 format (UTC)
- A GitHub URL to this project

 API Endpoint
**GET** `/`

 Response Format (200 OK)
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
