# HRMS.ai — The Intelligent Recruitment Ecosystem

> **Empowering Modern Hiring with AI-Powered Precision and Real-Time Voice Analytics.**

HRMS.ai is a comprehensive, end-to-end recruitment and talent management platform designed to streamline the hiring process using cutting-edge AI. By integrating Gemini API for resume parsing and real-time voice interviews, it bridges the gap between raw talent and high-performance teams.

---

## 🚀 Vision

In the rapidly evolving job market, traditional keyword-based screening is no longer enough. HRMS.ai provides **contextual understanding** of candidates' skills and **objective performance evaluation** through AI-driven voice interactions. It's not just a tracker; it's a talent optimizer.

---

## 🛠️ Key Technologies

- **Frontend**: Next-gen UI built with **React (Vite)**, styled with **TailwindCSS** for a premium, sleek experience.
- **Backend**: High-performance **Flask (Python)** server handling complex AI logic and data orchestration.
- **Database**: Efficient **SQLite** with **SQLAlchemy** for robust candidate and job management.
- **AI Core**: Powered by **Google Gemini Pro**, providing context-aware resume analysis and dynamic interview generation.
- **Voice Intelligence**: Integrated **Speech-to-Text (STT)** and **Text-to-Speech (TTS)** for an immersive AI Voice Interview interface.

---

## ✨ Core Capabilities

### 1. 📂 AI-Powered Resume Parsing & Matching
Stop manually sorting resumes. Our system contextually analyzes uploaded documents (PDF/DOCX) against job descriptions to provide a weighted "Match Score" based on skills, experience, and educational background.

### 2. 🎙️ Immersive AI Voice Interview Interface
Experience the future of screening. The platform initiates real-time, zero-latency voice interviews where the AI acts as a professional recruiter, asking technical and soft-skill questions, and evaluating responses instantly.

### 3. 📊 Recruitment Analytics Dashboard
A centralized hub for HR Admins to track application status, candidate rankings, and interview performance metrics with intuitive data visualization.

### 4. 👤 Candidate Console
Candidates can manage their profiles, upload multiple resumes, apply to tailored job openings, and participate in mock or real interviews from a single dashboard.

---

## 🖼️ UI Showcase

### 🏠 **Modern Landing Page**
*Where high-conversion design meets functional excellence. Highlighting our mission and features at a glance.*
![Landing Page](screenshots/landing_page.png)

### 📈 **HR Admin Dashboard**
*Complete visibility over the talent pool. Monitor candidate progress, review AI scores, and manage job postings.*
![HR Dashboard](screenshots/hr_dashboard.png)

### 💻 **Candidate Console**
*A personalized experience for every job seeker. Highlighting profiles, applications, and recommended roles.*
![Candidate Console](screenshots/candidate_dashboard.png)

### 🎙️ **The AI Interview Room**
*The crown jewel. A professional, distraction-free environment for AI-led performance assessments.*
![AI Interview Room](screenshots/ai_interview_room.png)

---

## 📥 Getting Started

1. **Clone the Repository**:
   ```bash
   git clone [your-repo-link]
   cd hrms
   ```

2. **Backend Setup**:
   - Create a `.env` file with your `GEMINI_API_KEY`.
   - Install dependencies: `pip install -r requirements.txt`.
   - Start the server: `python app.py`.

3. **Frontend Setup**:
   - `cd frontend`
   - `npm install`
   - `npm run dev`

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made with ❤️ for the next generation of recruitment.</p>
