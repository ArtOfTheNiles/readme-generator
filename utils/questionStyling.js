import colors from 'colors';

//Built-in affordances disappear on spacebar input! Why so inquirer? This is to supplement.
export const cbFlair = [ 
    colors.green('(-- '),
    colors.green(' || '),
    colors.green(' --)'),
    colors.white('Arrows'),
    colors.white('Spacebar'),
    colors.white('Enter')
]

// Construction: (-- Use Arrows to navigate || Spacebar to choose || Enter to finish --)
export const checkboxGuideText = colors.grey(` ${cbFlair[0]} Use ${cbFlair[3]} to navigate ${cbFlair[1]} ${cbFlair[4]} to choose ${cbFlair[1]} ${cbFlair[5]} to finish ${cbFlair[2]}\n`);

export default checkboxGuideText;
