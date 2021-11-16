// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType } from 'typesafe-i18n'
import type { LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = {
	'0': {	
		/**
		 * test 123
		 */
		'0': string
	}
	'1': {	
		'0': {	
			'nested': {	
				'test': {	
					/**
					 * {name}
					 * @param {string} name
					 */
					'0': RequiredParams1<'name'>
					'1': {	
						/**
						 * test
						 */
						'a': string
					}
				}
			}
		}
	}
}

export type TranslationFunctions = {
	'0': {	
		/**
		 * test 123
		 */
		'0': () => LocalizedString
	}
	'1': {	
		'0': {	
			'nested': {	
				'test': {	
					/**
					 * {name}
					 */
					'0': (arg: { name: string }) => LocalizedString
					'1': {	
						/**
						 * test
						 */
						'a': () => LocalizedString
					}
				}
			}
		}
	}
}

export type Formatters = {}

type Param<P extends string> = `{${P}}`

type Params1<P1 extends string> =
	`${string}${Param<P1>}${string}`

type RequiredParams1<P1 extends string> =
	| Params1<P1>
