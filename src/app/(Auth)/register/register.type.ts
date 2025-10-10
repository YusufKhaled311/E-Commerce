
import * as zod from 'zod'
import { schema } from './Register.Schema'

export type RegisterFromType = zod.infer<typeof schema>