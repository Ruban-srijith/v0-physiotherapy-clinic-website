import { NextResponse } from 'next/server'
import { google } from 'googleapis'

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    if (!spreadsheetId) {
      return NextResponse.json({ error: 'GOOGLE_SHEET_ID missing' }, { status: 500 })
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [[new Date().toISOString(), name, email, message]] },
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Sheets API error:', error)
    return NextResponse.json({ error: (error as Error).message || 'Failed' }, { status: 500 })
  }
}