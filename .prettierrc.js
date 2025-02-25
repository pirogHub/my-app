/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	parser: 'typescript',
	useTabs: true,
	arrowParens: 'always',
	printWidth: 120,
	trailingComma: 'all', // при none запятая после последнего элемента массива не будет добавляться
	bracketSpacing: false,
	jsxBracketSameLine: false, //
	bracketSameLine: false, // закрывающий тег будет переноситься на новую строку
	jsxSingleQuote: false, // в jsx будут двойные кавычки
	importOrder: ['^react(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
	importOrderSeparation: true, // add empty line between import groups
	importOrderSortSpecifiers: true, // сортировка по алфавиту в import {B, A, C} from "" => import {A, B, C} from ""
};
