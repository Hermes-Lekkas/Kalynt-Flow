# Privacy Policy for Kalynt Flow

**Effective Date:** August 16, 2026  
**Last Updated:** August 16, 2026  
**Application Identifier:** `com.aistudio.kalyntflow.app`  
**Developer & Contact Email:** `KalyntFlow@protonmail.com` | `hermeslekkasdev@gmail.com`

---

## 1. Introduction & Privacy Commitment
Kalynt Flow ("we", "us", or "our") is dedicated to protecting your privacy and providing transparent disclosures regarding data collection, local device storage, cloud synchronization, and security practices.

This Privacy Policy explains how information is collected, stored, processed, and safeguarded when you install and use the **Kalynt Flow** mobile application for Android and its associated services.

Kalynt Flow is designed with an **Offline-First philosophy**: all core productivity data (tasks, Markdown notes, calendar schedules, and workspace hierarchies) is stored on your device first and only synced to the cloud when you choose to authenticate.

---

## 2. Information We Collect

### A. Information Stored Locally on Your Device
- **Workspaces & Hierarchies**: Custom workspace names, descriptions, color codes, and ordering.
- **Tasks & Subtasks**: Task titles, detailed descriptions, priority levels (*Low, Medium, High, Urgent*), due dates, and completion status.
- **Markdown Notes**: Note titles, rich formatted text content, categories, tags, and timestamps.
- **Calendar Events**: Event titles, descriptions, start/end timestamps, location strings, and reminders.
- **Local Settings & Preferences**: Theme selections (Light, Dark, AMOLED Black), notification toggles, active guardrail filter preferences, and onboarded user personas.
- **GitHub Personal Access Tokens (PAT)**: If you connect GitHub, your Personal Access Token is stored exclusively in encrypted on-device Android storage.

### B. Information Synchronized with Google Cloud (When Signed In)
When you choose to authenticate via Google Sign-In or Firebase Authentication:
- **Authentication Data**: User Email, Display Name, Profile Photo URL, and Firebase Unique User Identifier (UID).
- **Synchronized Cloud Documents**: Your tasks, notes, calendar events, workspaces, and team channel messages are synchronized over TLS 1.3 encrypted connections with Google Cloud Firebase Firestore (`workspaces`, `tasks`, `notes`, `calendar_events`, `chat_messages`, `team_members`, `ai_reports`).
- **Subscription Entitlements**: Google Play Billing purchase tokens and subscription statuses (Pro Monthly, Pro Annual, Lifetime Access).

### C. Information We DO NOT Collect
- We **do not** collect sensitive personal financial account numbers, passwords to external accounts, or biometric data.
- We **do not** track your physical GPS location.
- We **do not** sell, rent, or trade your personal data, workspace content, or usage activity to third-party data brokers or ad networks.

---

## 3. Device Permissions & How They Are Used

| Android Permission | Requirement | Purpose & Justification |
| :--- | :--- | :--- |
| `android.permission.INTERNET` | Mandatory for Sync & AI | Used to communicate with Firebase Authentication, Cloud Firestore synchronization, GitHub REST API calls, and the AI Copilot API. |
| `android.permission.ACCESS_NETWORK_STATE` | Recommended | Checks connectivity to seamlessly transition between offline-first Room local persistence and online Firestore sync. |
| `android.permission.CAMERA` | Optional Runtime Permission | Used solely when you manually open the barcode/QR code or document scanning tools within the app. Camera data is processed in real time and is never uploaded to any external server without your consent. |

---

## 4. How Your Data Is Processed

### A. Offline-First Local Database (Android Room SQLite)
Your primary records are persisted locally inside an AndroidX Room SQLite database on your device's sandboxed storage partition (`AppDatabase`). This ensures zero-latency access, full offline functionality, and resilient operation during flight or network disconnects.

### B. Generative AI Processing & Safety Guardrails
When you interact with the Kalynt Flow AI Copilot:
- **Context Injection**: Relevant snippets of your active workspace (such as recent tasks and notes) are structured and transmitted securely to our AI model gateway via TLS 1.3 to fulfill your specific prompt or action request.
- **AI Output Transparency**: Every AI response is tagged with an explicit `✦ AI-Generated Response` badge.
- **User Flagging & Continuous Refinement**: When you flag an AI response using the **Flag AI Output** feature, the reported issue is logged to Firestore and used to generate dynamic safety filters that prevent repeated mistakes in your active session.
- **No Training on Private Data**: Your private workspace documents and notes are not used to train foundational AI models.

### C. GitHub REST API Integration
When inspecting repositories, commits, or issues:
- Requests are dispatched directly from your device to `https://api.github.com`.
- Your GitHub PAT is passed directly in the HTTP Authorization header from your device and is never routed through or stored on third-party intermediary servers.

---

## 5. Third-Party Service Providers & Subprocessors
We partner only with industry-standard, compliant infrastructure providers:
- **Google Cloud / Firebase**: Authentication, Cloud Firestore synchronization, and analytics infrastructure.
- **Google Play In-App Billing**: Secure purchase and subscription processing.
- **GitHub API (Optional)**: Direct repository synchronization requested by the user.

---

## 6. User Data Retention & Account Deletion (Google Play Compliance)

You have full ownership and unilateral control over your data.

### 1. In-App 1-Tap Account & Data Deletion
You can permanently delete your entire account and all associated data directly inside the application:
1. Open the left navigation drawer.
2. Tap **Safety & Policies**.
3. Select **Delete Account & All Personal Data**.
4. Confirm deletion.

**What Happens Upon Deletion:**
- All local Room SQLite database entries (workspaces, notes, tasks, calendar entries, chat cache, and blocked users) are permanently deleted from your device.
- All associated user documents and membership records are removed from Cloud Firestore.
- Your Firebase Authentication credentials are deleted.
- You are immediately signed out.

### 2. Manual Deletion by Email
You may also request complete data removal by emailing `KalyntFlow@protonmail.com` with the subject line *"Data Deletion Request"*. All server-side data associated with your email will be purged within 48 hours.

---

## 7. Security Measures
- **Data in Transit**: All network requests to Firebase, GitHub, and AI APIs are encrypted using TLS 1.3 / HTTPS.
- **Data at Rest**: Local database files reside within Android's sandboxed private application storage, protected by Android OS security architecture and device-level hardware encryption.
- **Access Control**: Cloud Firestore security rules strictly restrict read and write access to authenticated users owning their respective workspace documents.

---

## 8. Children's Privacy
Kalynt Flow does not knowingly collect or solicit personal information from children under the age of 13. If you believe that a child has provided us with personal information, please contact us at `KalyntFlow@protonmail.com` so we can promptly delete the data.

---

## 9. Changes to This Privacy Policy
We may update this Privacy Policy periodically to reflect new features or regulatory requirements. Any updates will be published on this website and indicated in the application settings with an updated revision date.

---

## 10. Contact Information
For any privacy questions, data requests, or security inquiries, please contact:
- **Data Protection & Privacy Contact:** `KalyntFlow@protonmail.com`
- **Developer Contact:** `hermeslekkasdev@gmail.com`
- **Application Package ID:** `com.aistudio.kalyntflow.app`
