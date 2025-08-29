# Healthcare Management System (HMS) – Detailed Software Requirements Specification (SRS)

> **Stack Target:** MERN (MongoDB, Express.js, React, Node.js) with TypeScript (recommended), Redux Toolkit/Zustand, Socket.io, PDFKit, Cloudinary/AWS S3, Stripe/bKash/Nagad (optional), OpenAI/med‑symptom model (for chatbot), Docker, GitHub Actions.

> **Core Personas:** Patient, Doctor, Admin. (Optional: Pharmacist, Receptionist/Scheduler, Super Admin.)

---

## 1) Vision & Goals
- Provide secure, seamless **appointments**, **e‑prescriptions (PDF)**, **tele‑consultation**, **medical records**, and **AI symptom triage**.
- Comply with security best practices; auditability and role‑based access.
- Scalable, multi‑clinic support (v2+).

**Success KPIs**
- Time‑to‑appointment booking < 90s (median).
- Failed API error rate < 1%.
- Page LCP < 2.5s on 3G; TTI < 4s.
- Patient NPS > 50.

---

## 2) Roles & Permissions
- **Patient**: register, verify phone/email, view/search doctors, book/reschedule/cancel, pay (if enabled), tele‑visit, view prescriptions, download PDFs, upload reports, chat with clinic (asynchronous), chatbot triage.
- **Doctor**: KYC/onboarding, set availability, approve requests, calendar view, video consult, create e‑prescriptions (e‑signed), view EMR (encounters, vitals, labs), upload files, secure messaging, analytics.
- **Admin**: manage users/clinics/departments/specialties, force password reset, manage pricing, see audit logs, dashboards (appointments, revenue, satisfaction), CMS content.
- **(Optional)** Pharmacist: validate e‑Rx QR, mark dispensed.
- **(Optional)** Receptionist: calendar management, slot override, walk‑in creation.

**Permission Model**: RBAC with resource‑scoped permissions (e.g., `appointment:write`, `prescription:sign`, `user:invite`).

---

## 3) Information Architecture & Navigation (Sitemap)
- **Public**: Home → Find Doctors → Specialties → Doctor Profile → About → Pricing → Contact → Auth
- **Patient App**: Dashboard → Appointments → Prescriptions → Records (uploads) → Payments → Messages → Chatbot → Profile/Settings
- **Doctor App**: Dashboard → Calendar → Patients → Encounters → Prescriptions → Messages → Availability → Analytics → Profile/Settings
- **Admin App**: Overview → Users → Clinics → Specialties → Appointments → Billing → CMS → Audit Logs → Reports/Analytics → Settings

---

## 4) Page‑by‑Page Functional Requirements

### 4.1 Public Website
**Home Page**
- Hero: search bar (specialty/doctor/location/date), CTA buttons (Book Appointment, Consult Online).
- Cards: Top Specialties, Featured Doctors (rating, years exp, next available).
- How it works (3 steps), Trust indicators (clinics, reviews), Footer with policies.
- **SEO**: SSR or pre‑render; meta tags per locale; schema.org `MedicalOrganization` & `Physician`.

**Doctor Listing Page**
- Filters: specialty, gender, experience, availability, fee range, telemedicine, language.
- Sort: Rating, Price (asc/desc), Next available.
- Results with pagination/infinite scroll.

**Doctor Profile Page**
- Bio, qualifications, specialties, languages, clinic locations + map, fees.
- Ratings/reviews, next available slots (7‑day grid), Book buttons (in‑person / video).

**Auth** (Sign up / Login / Forgot)
- Email/phone + OTP; social (Google/GitHub) optional.
- Password rules; show strength meter.
- Terms/Privacy consent; Captcha; Rate limiting.

### 4.2 Patient Application
**Dashboard**
- Upcoming appointment widget, recent prescriptions, chatbot shortcut.
- Notifications center.

**Book Appointment**
- Select doctor → choose mode (in‑person/video) → slot picker (real‑time availability) → reason for visit → payment (if required) → confirmation with ICS calendar file & email/SMS.
- Reschedule/cancel (policy driven; fees/refunds rules).

**Video Consultation**
- Pre‑call device check; consent prompt.
- Waiting room; in‑call chat, file share, screen share, timer; end‑call feedback.

**Prescriptions**
- List with status (issued/updated/expired/dispensed).
- View details; **Download PDF**; QR code to verify; share link (tokenized, time‑limited).

**Medical Records**
- Upload images/PDFs (labs, reports) with tags and dates.
- OCR (optional) for key values extraction.

**Payments** (optional)
- Methods: Card/Stripe, bKash/Nagad/SSLCOMMERZ; save tokenized method.
- Invoices & receipts (PDF).

**Messages**
- Secure thread with clinic/doctor; attachments; read receipts.

**Chatbot (Symptom Checker)**
- Conversational triage: collects symptoms, duration, severity, flags red‑alerts.
- Outputs: likely specialty, urgency (self‑care / GP within 24h / emergency), next steps, educational content.
- Escalate to human (create draft appointment with suggested specialty).

**Profile/Settings**
- PHI/PII, emergency contact, preferred language, notifications (email/SMS/push), privacy controls, delete account, devices/sessions list.

### 4.3 Doctor Application
**Onboarding & KYC**
- Upload license, degrees, BMDC number (or local equivalent), clinic affiliation; admin verification workflow.

**Dashboard**
- Today’s schedule; unread messages; quick actions (start next video call, write Rx).

**Availability & Calendar**
- Define recurring slots, breaks, leaves/holidays; time‑zone aware.
- Overbook rules; buffer times; per‑clinic fees.

**Patient List & EMR**
- Search by name/ID; patient summary (allergies, conditions, meds, last vitals, labs).
- Encounters: SOAP notes, vitals, diagnoses (ICD‑10/11 codes), attachments.

**e‑Prescription Builder**
- Drug search (auto‑complete + formulary), dosage, frequency, duration, instructions.
- Tests/labs, advice, follow‑up date.
- **Generate & sign PDF**; add QR; send to patient; update/renew flow.

**Video Consult**
- Same as patient, plus: admit patient, mark no‑show, add notes during call, create Rx from template.

**Analytics**
- Appointments completed, cancellations, revenue (if applicable), ratings; export CSV.

**Messages**
- Secure messaging with patients/admin; templates (quick replies).

**Profile/Settings**
- Fees per mode, specialties, languages, bio, clinics, bank/payout details (optional), device/sessions, 2FA.

### 4.4 Admin Application
**Overview Dashboard**
- KPIs: bookings, conversion, avg wait time, revenue, MAU, doctor utilization.

**User Management**
- CRUD for patients/doctors/admins; invite flow; suspend/reactivate; force reset.

**Clinic & Specialty Management**
- Clinics/locations, departments, room calendars; specialty taxonomy.

**Appointments**
- Global calendar, conflict resolution, service level policies, no‑show tracking.

**Billing & Pricing**
- Global price rules, coupons, refunds; payout cycles for doctors.

**Content (CMS)**
- Manage home page content, FAQs, blogs, health articles.

**Audit & Compliance**
- View audit logs (who did what, when, from where); export.

**Reports**
- Operational & financial; scheduled email exports; BI integration hooks.

**Settings**
- Email/SMS templates, OAuth providers, payment gateways, storage, captcha, rate limits.

---

## 5) Functional Requirements by Module

### 5.1 Authentication & Authorization
- JWT access + refresh tokens; optional OAuth; device/session management; 2FA (TOTP/SMS/email).
- Password: bcrypt/argon2; complexity rules; reset via token.
- RBAC middleware; route‑level guards; field‑level projection based on role.

### 5.2 Appointments & Scheduling
- Slot generation engine (recurring rule + exceptions + holidays + buffers).
- Conflict checks; overbook thresholds; no‑show auto rules; reschedule logic.
- Notifications: email/SMS/push for create/update/cancel; ICS calendar attachment.

### 5.3 Telemedicine (WebRTC)
- Signaling via Socket.io; TURN/STUN config; fallbacks; bandwidth adapt.
- In‑call chat/files; call quality metrics; consent recording (text log).

### 5.4 EMR & Encounters
- SOAP notes; vitals (BP, HR, Temp, SPO2, BMI); ICD‑10/11 codes; attachments.
- Versioning and immutability of signed encounters (append‑only, redact with reason).

### 5.5 e‑Prescription (PDF)
- Templated PDF (clinic/doctor branding); localized; QR verifying hash (server endpoint).
- Drug DB integration (local formulary JSON or external API); auto warnings (allergy, duplication, interactions – v2).
- Status: Draft → Signed → Updated → Expired → Dispensed.

### 5.6 Payments & Invoicing (Optional)
- Gateway abstraction; PCI‑safe tokenization; refunds/voids; invoices/receipts PDF.

### 5.7 Chatbot – Symptom Checker
- Guided form + conversational mode; red‑flag detection; final summary; suggest specialty/urgency.
- Human handoff: create draft appointment, pass triage transcript to doctor.

### 5.8 Notifications
- Provider‑agnostic service (email, SMS, push).
- Templates with variables; per‑user preferences; digest mode.

### 5.9 Search
- Full‑text for doctors, specialties, conditions; typo tolerance (Mongo Atlas Search/Meilisearch – optional).

### 5.10 CMS
- Blog/articles with categories/tags; WYSIWYG editor; publish schedule; SEO fields.

### 5.11 Analytics & Logging
- Event tracking (book_clicked, appointment_booked, rx_generated, video_started, etc.).
- Error tracking (Sentry); performance (Web Vitals) collection; server logs (Winston).

---

## 6) Non‑Functional Requirements
- **Security**: Helmet, CORS, CSRF for cookies (if used), rate limiting, input sanitization, upload virus scan, audit logs, encryption at rest (DB) & in transit (TLS), secrets in vault.
- **Privacy/Compliance**: Data minimization, consent, right to delete; IP/location logging for security; PHI segregation; retention policies; GDPR‑like fundamentals.
- **Performance**: API p95 < 300ms for common endpoints; cache with Redis; CDN for static & PDFs.
- **Reliability**: 99.9% uptime target; health checks; auto restarts; DB backups; disaster recovery RPO 24h/RTO 4h.
- **Scalability**: Horizontal scaling; stateless API; background jobs (BullMQ) for email/PDF.
- **Accessibility**: WCAG 2.1 AA; keyboard/screen reader support; color contrast; captions for video.
- **Localization**: i18n; RTL support; server dates/time‑zones correct per user.

---

## 7) Data Model (MongoDB – Collections & Key Fields)
**users**
- _id, role [patient|doctor|admin|...], name, email, phone, passwordHash, status, verified, 2fa, addresses[], languages[], createdAt, updatedAt.

**doctors**
- userId → users._id, bmdcNumber, specialties[], experienceYears, fees {inPerson, video}, clinics[], availabilityRules[], documents[], ratings {avg,count}.

**patients**
- userId → users._id, dob, gender, bloodGroup, allergies[], conditions[], meds[], emergencyContact{}, insurance(optional).

**appointments**
- doctorId, patientId, clinicId, mode[inPerson|video], startAt, endAt, status[pending|confirmed|completed|cancelled|noShow|rescheduled], reason, paymentId?, notes, meetRoomId.

**encounters**
- appointmentId, doctorId, patientId, soap{subjective,objective,assessment,plan}, vitals{}, diagnoses[], attachments[], locked(bool), version.

**prescriptions**
- encounterId, doctorId, patientId, items[{drugId/text, dose, route, frequency, duration, instructions}], labs[], advice, followUpAt, pdfUrl, qrHash, status, dispensedAt?, pharmacistId?.

**files**
- ownerId, role, type[record|report|image|other], url, meta{mime,size,ocr?}, createdAt.

**payments**
- userId, appointmentId?, amount, currency, method, providerRef, status, invoicePdfUrl.

**messages**
- participants[userIds], createdBy, lastMessageAt.

**messageEvents**
- threadId, senderId, text, attachments[], readBy[], createdAt.

**auditLogs**
- actorId, action, resourceType, resourceId, before, after, ip, userAgent, createdAt.

**cmsPosts**, **specialties**, **clinics**, **reviews**, **notifications** etc.

---

## 8) API Endpoints (Representative)
**Auth**
- POST /auth/register, /auth/login, /auth/refresh, /auth/logout, /auth/verify‑email, /auth/forgot, /auth/reset

**Users**
- GET /me, PATCH /me, GET /users/:id (role‑guarded)

**Doctors**
- GET /doctors?filters, GET /doctors/:id, POST /doctors (admin), PATCH /doctors/:id (self/admin)
- GET /doctors/:id/slots?from=…&to=…

**Appointments**
- POST /appointments, GET /appointments?patientId|doctorId|status, PATCH /appointments/:id (reschedule/cancel), POST /appointments/:id/confirm

**Telemed**
- POST /video/session (create room/token), POST /video/session/:id/end

**Encounters & Rx**
- POST /encounters, GET /encounters?patientId|doctorId
- POST /prescriptions (generate), GET /prescriptions/:id/pdf, GET /prescriptions/verify/:qrHash

**Files**
- POST /files (signed URL), DELETE /files/:id

**Payments**
- POST /payments/intent, POST /payments/webhook, GET /payments/:id

**Chat & Notifications**
- POST /messages/thread, POST /messages/:threadId/event, GET /notifications

**Admin**
- CRUD: /admin/users, /admin/clinics, /admin/specialties, /admin/cms, /admin/reports

---

## 9) PDFs & QR Verification – Requirements
- **Prescription PDF**
  - Header: clinic logo, doctor details (name, reg no., contact), patient details, date/time, appointment ID.
  - Body: medicines table (name, strength, dose, frequency, duration, notes), labs/tests, advice.
  - Footer: follow‑up date, signature block (e‑sign image + signed timestamp), QR code.
  - A4 size, selectable text, embedded fonts; locale‑aware numbering.
- **Invoice PDF** with fee items, tax, payment ref.
- **QR** encodes short URL + hash; verify endpoint shows canonical Rx JSON & status.

---

## 10) Validation & Error Handling
- Request validation via Zod/Joi; meaningful codes/messages; correlation‑id header for tracing.
- Graceful file upload failures with retry; idempotency keys for payment/booking.

---

## 11) DevOps & Deployment
- Environments: dev/staging/prod; per‑env secrets.
- Docker images; compose with Mongo/Redis; health checks.
- GitHub Actions: lint, test, build, e2e, deploy.
- Observability: Prometheus metrics, Grafana (optional), Sentry for FE/BE.
- Backups: nightly DB dump; retention 30/90 days; restore runbook.

---

## 12) Security & Privacy
- TLS everywhere; HSTS; CSP; XSS/SQLi/NoSQLi hardening; object‑level authorization.
- PHI encryption at rest; access logs; least‑privilege DB users.
- Session/device list with revoke; 2FA optional; account deletion flow with 30‑day grace.
- Data retention: encounters/prescriptions immutable; redaction with reason; audit trail.

---

## 13) Accessibility & UX Details
- Forms: labels, ARIA, error summaries; keyboard trap avoidance.
- Color contrast min 4.5:1; focus outlines; reduced motion option.
- Captions/alt text; language switcher.

---

## 14) Analytics, Metrics & Reporting
- Funnel: visit → search → doctor profile → slot select → payment → confirm.
- Operational: avg wait time, cancellation rate, no‑show %, video drop rate.
- Clinical ops: common complaints, follow‑up adherence (anonymized aggregates only).
- Exports: CSV/XLSX; scheduled monthly reports to admin email.

---

## 15) Testing Strategy & Acceptance Criteria (Samples)
**Unit**: validators, slot generator, price calc, PDF builder.
**Integration**: booking flow, payment webhook, Rx verify.
**E2E**: Cypress — patient book/reschedule; doctor issues Rx; patient downloads PDF; chatbot triage → handoff.
**Security**: authz bypass attempts, IDOR, rate‑limit checks, file‑scan tests.

**Acceptance – Appointment Booking**
- Given a doctor with availability, when patient selects a free slot and confirms payment (if required), then appointment status becomes `confirmed`, notifications are sent, ICS attached, and slot is locked for the duration + buffer.

**Acceptance – Prescription PDF**
- Given a completed encounter, when doctor signs Rx, then a non‑editable PDF is generated with QR; `/prescriptions/verify/:hash` returns 200 with canonical data; patient can download.

**Acceptance – Chatbot Triage**
- Given symptom inputs, chatbot returns specialty and urgency category with rationale; if red‑flags present, shows emergency disclaimer and disables online booking for that flow.

---

## 16) Performance Budgets
- FE bundle < 250KB gz (critical path) for public pages; code‑split dashboards.
- API: p95 < 300ms for search/slots; < 600ms for PDF.
- DB: indexes on (doctorId,startAt,status), (patientId,createdAt), text index for doctors.

---

## 17) Logging & Auditing
- Structured logs (JSON); requestId propagation; userId, role, ip.
- Audit for sensitive actions (login, view EMR, create Rx, export data, change availability).

---

## 18) Backup & DR
- Automated daily snapshots; weekly full; test restore monthly.
- RPO ≤ 24h; RTO ≤ 4h.

---

## 19) Roadmap (MVP → v1 → v2)
**MVP (8–10 weeks)**
- Public site, auth, doctor search/profile, booking (in‑person), patient/doctor dashboards, basic encounters, Rx PDF, notifications.

**v1 (next 6–8 weeks)**
- Telemedicine, payments, chatbot (rule‑based), analytics, admin CMS, reviews.

**v2 (next 8–12 weeks)**
- Multi‑clinic tenancy, advanced AI triage, pharmacy verification, insurance, mobile PWA offline, BI exports, ICD code integrations, drug interaction checker.

---

## 20) Definition of Done (Global)
- Linting + 90% unit coverage on core modules; passing e2e happy paths.
- Accessibility checks passed; SEO audits > 90 on public pages.
- Security checklist signed; secrets rotated; backup verified.
- Docs: README, API (OpenAPI), Postman collection, admin runbook, on‑call playbooks.

---

## 21) Open Questions (to resolve during discovery)
- Local regulatory requirements (e‑Rx legality, data residency).
- Payment processors for target market; invoicing/tax rules.
- Drug/formulary data source and update cadence.
- Telemed vendor vs. in‑house WebRTC (for stability/SLA).

---

**Appendix A – Sample Prescription JSON**
```json
{
  "prescriptionId": "rx_123",
  "patient": { "id": "pat_1", "name": "A. Rahman", "age": 32, "gender": "M" },
  "doctor": { "id": "doc_9", "name": "Dr. N. Akter", "regNo": "BMDC-12345" },
  "encounterId": "enc_77",
  "date": "2025-08-10T10:30:00Z",
  "items": [
    { "drug": "Amoxicillin 500mg", "dose": "1 cap", "frequency": "8 hourly", "duration": "5 days", "instructions": "After food" }
  ],
  "labs": ["CBC", "CRP"],
  "advice": "Hydrate well; return if fever persists",
  "followUpAt": "2025-08-17T10:30:00Z",
  "qrHash": "a1b2c3...",
  "status": "signed"
}
```

**Appendix B – Example Slot Rule**
```json
{
  "doctorId": "doc_9",
  "recurrence": "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH;BYHOUR=10,11,12,14,15",
  "durationMin": 15,
  "bufferMin": 5,
  "breaks": [{"start": "12:30", "end": "13:30"}],
  "exceptions": ["2025-09-01"]
}
```

