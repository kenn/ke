#!/usr/bin/env node
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import chalkAnimation from 'chalk-animation'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const cardPath = join(__dirname, 'card.txt')
const cardContent = readFileSync(cardPath, 'utf-8')

chalkAnimation.pulse(cardContent)
