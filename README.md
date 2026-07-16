# BRAID

## ET AI Hackathon 2026

BRAID is an AI-powered Industrial Knowledge Intelligence platform that converts factory documents into a searchable knowledge base.

---

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Supabase
- PostgreSQL
- Supabase Storage
- Google Gemini API

---

## Environment Variables

Create a `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=

SUPABASE_SERVICE_ROLE_KEY=

GEMINI_API_KEY=
```

---

## Database Tables

- documents
- entities
- flags
- document_chunks
- document_relations

---

## APIs

### Upload Document

POST

```
/api/documents/upload
```

Uploads a PDF, analyzes it with Gemini and stores:

- document
- entities
- flags

---

### Get Documents

```
GET /api/documents
```

Returns all uploaded documents.

---

### Get Single Document

```
GET /api/documents/:id
```

Returns

- document
- entities
- flags

---

### Equipment Search

```
GET /api/equipment
```

Optional

```
GET /api/equipment?search=Pump
```

---

### Entities

```
GET /api/entities
```

---

### Flags

```
GET /api/flags
```

---

## Person 1 Completed

- Project setup
- Supabase integration
- Storage
- Gemini integration
- AI document processing
- Upload API
- Documents API
- Equipment API
- Entities API
- Flags API

---

## Remaining Work

### Person 2

documentProcessor.ts prompt updated to also extract raw_text, previously hardcoded null — needed for Person 2's embeddings/chat.

- Embeddings
- RAG
- Chat API
- Related Documents
- Knowledge Capture

### Person 3

- Dashboard
- Upload UI improvements
- Chat UI
- Equipment pages
- Final styling
