export const printLogo = async () => {
  const chalk = (await import('chalk')).default;
  const green = chalk.hex('#9ae991');

  console.log(
    'Hi! You are using a generator powered by ',
    green(`
  ______                                              ____
 |  ____|                                            |  _ \\
 | |__    __  __  _ __    _ __    ___   ___   ___    | |_) |   ___    __ _   _ __    ___
 |  __|   \\ \\/ / | '_ \\  | '__|  / _ \\ / __| / __|   |  _ <   / _ \\  / _\` | | '_ \\  / __|
 | |____   >  <  | |_) | | |    |  __/ \\__ \\ \\__ \\   | |_) | |  __/ | (_| | | | | | \\__ \\
 |______| /_/\\_\\ | .__/  |_|     \\___| |___/ |___/   |____/   \\___|  \\__,_| |_| |_| |___/
                 | |
                 |_|
`),
  );
};
