export const printLogo = async () => {
  const chalk = (await import('chalk')).default;
  const bluish = chalk.hex('#88c0bf');
  const reddish = chalk.hex('#fe8e9c');
  const pastaLight = chalk.hex('#f8d56d');
  const pastaDark = chalk.hex('#e3c565');
  const plateLight = chalk.hex('#c7c7c7');
  const plateDark = chalk.hex('#a8a8a8');
  console.log(
    reddish('Hi! You are using a generator powered by ') + bluish('spaghiajoeojo') + reddish('!'),
    `
                   ${bluish('###')}
           ${bluish('###################')}
       ${bluish('###########################')}
     ${bluish('##########################')}${reddish('%')}${bluish('####')}
   ${bluish('##########################')}${reddish('%%')}${bluish('#######')}
  ${bluish('#########################')}${reddish('%%')}${bluish('#########')}
 ${bluish('#######################')}${pastaLight('%')}${reddish('%%')}${bluish('##############')}
 ${bluish('####################')}${pastaLight('%%')}${pastaDark('###')}${bluish('##############')}
${bluish('############')}${pastaLight('%%%%%%%%%%%%%%%%')}${bluish('############')}
 ${bluish('########')}${plateDark('#')}${pastaLight('%%')}${plateDark('####################')}${bluish('########')}
 ${bluish('#########')}${pastaLight('%%')}${bluish('/')}${plateLight('#%%%%%%%%%%%%%')}${bluish('///////######')}
  ${bluish('#########/////////////////////////###')}
   ${bluish('##########/////////////////////////')}
     ${bluish('##########/////////////////////')}
       ${bluish('#########//////////////////')}
           ${bluish('#######////////////')}

`,
  );
};
