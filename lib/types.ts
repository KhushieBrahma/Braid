// =========================
// Document Types
// =========================

export interface Document {
  id: string;
  file_name: string;
  file_url: string;
  doc_type:
    | "inspection_report"
    | "maintenance_log"
    | "manual"
    | "sop"
    | "other"
    | "tacit_knowledge"
    | null;
  summary: string | null;
  raw_text: string | null;
  uploaded_at: string;
}

// =========================
// Entity Types
// =========================

export interface Entity {
  id: string;
  document_id: string;
  entity_type:
    | "equipment"
    | "person"
    | "date"
    | "issue"
    | "regulation";
  entity_value: string;
  context: string | null;
}

// =========================
// Flag Types
// =========================

export interface Flag {
  id: string;
  document_id: string;
  flag_type: string | null;
  description: string | null;
  severity: "low" | "medium" | "high";
  created_at: string;
}

// =========================
// Upload Response
// =========================

export interface UploadResponse {
  id: string;
  file_name: string;
  doc_type: string | null;
  summary: string | null;
}

// =========================
// Chat Response
// (Person 2 will use later)
// =========================

export interface ChatResponse {
  answer: string;
  citations: {
    document_id: string;
    file_name: string;
  }[];
}


// =========================
// AI Extraction Result
// =========================

export interface AIExtractionResult {
  document_type: string;
  title: string;
  summary: string;
  raw_text: string;

  equipment: string[];

  entities: {
    name: string;
    type: string;
  }[];

  flags: {
    type: string;
    description: string;
    severity: "low" | "medium" | "high";
  }[];

  keywords: string[];
}