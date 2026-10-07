# Mandatory disclosure — document slots

The public page only lists certificates that have a file. When a missing document arrives, add it back in the same place and the same way as the others.

Page: `src/routes/mandatory-disclosure.tsx`, section **B. Documents and information** (`Statutory documents.`).
Files: `public/disclosure/`.
Each row is the document title plus a View control that shows the PDF on the same page, under that row.

## How to add a document

1. Copy the PDF to `public/disclosure/` using the filename below.
2. In `DOCUMENTS` in `src/routes/mandatory-disclosure.tsx`, insert the row at the position noted below:

```ts
{ label: "Exact title", href: "/disclosure/filename.pdf" },
```

3. Add that filename to the allow-list in `server/routes/disclosure/[file].get.ts`.

## On the page now

| Position | Title | File |
| --- | --- | --- |
| 1 | Affiliation / upgradation letter from CBSE | `cbse-grant-letter.pdf` |
| 2 | Trust / society / company registration certificate | `trust-deed.pdf` |
| 3 | No-Objection Certificate (NOC) from State Government | `noc-certificate.pdf` |
| 4 | Recognition certificate under RTE Act, 2009 | `recognition-certificate.pdf` |
| 5 | Building safety certificate | `building-safety-certificate.pdf` |
| 6 | Fire safety certificate | `fire-safety-certificate.pdf` |
| 9 | Copy of valid water, health and sanitation certificates | `water-certificate.pdf` |

## Removed until a value is provided

These were "To be confirmed". Put a row back with `Row` inside the section named below. A row is `{ label, value }` rendered by the `Row` component in `src/routes/mandatory-disclosure.tsx`.

### A. General information — `The school, in numbers and names.`

Insert after Affiliation No. (CBSE):

- School code
- Principal name & qualification (after the address)

### C. Results & academic performance — `Board exam results.`

Whole section was removed. Restore it after the documents section, on a white background.

- Class X — last three years
- Class XII — last three years
- Note under the rows: year-wise result PDFs, once those files exist

### D. Staff — on the page

- Principal: 1
- Total teaching staff: 30
- PPRT: 8
- PRT: 6
- TGT: 16
- Special educator: 1
- Counsellor: 1

### E. School infrastructure — `Land, building and facilities.`

Whole section was removed. White background, after staff.

- Total campus area (sq m)
- Built-up area (sq m)
- Number of classrooms & size
- Library — books and digital resources
- Science / computer / maker labs
- Sports facilities
- Internet / Wi-Fi

## Removed until the file is provided

Put these back between fire safety (6) and the water certificate (9).

| Position | Title | Suggested filename |
| --- | --- | --- |
| 7 | Health & sanitary certificate | `health-sanitary-certificate.pdf` |
| 8 | DEO certificate for Right to Education | `deo-rte-certificate.pdf` |

Example, once those two files exist:

```ts
{ label: "Fire safety certificate", href: "/disclosure/fire-safety-certificate.pdf" },
{ label: "Health & sanitary certificate", href: "/disclosure/health-sanitary-certificate.pdf" },
{ label: "DEO certificate for Right to Education", href: "/disclosure/deo-rte-certificate.pdf" },
{ label: "Copy of valid water, health and sanitation certificates", href: "/disclosure/water-certificate.pdf" },
```
