// app/api/submit/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()

  formData.append('access_key', process.env.WEB3_FORM_KEY!)

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData
  })

  return NextResponse.json(await response.json())
}