
import * as zod from 'zod'
import { schema } from './Login.Schema'

export type LoginFromType = zod.infer<typeof schema>