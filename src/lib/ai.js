import OpenAI from 'openai-api'
const ai = new OpenAI(process.env['OPENAI_SECRET_KEY'])

export default ai
