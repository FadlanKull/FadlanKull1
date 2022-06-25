const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const consola = require('consola');
const rs = require('readline-sync');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  consola.start(`
┈┈┈╲┈┈┈┈╱
┈┈┈╱▔▔▔▔╲
┈┈┃┈▇┈┈▇┈┃     Fadlan Kull🥶🥶
╭╮┣━━━━━━┫╭╮
┃┃┃┈┈┈┈┈┈┃┃┃
╰╯┃┈┈┈┈┈┈┃╰╯
┈┈╰┓┏━━┓┏╯
┈┈┈╰╯┈┈╰╯ Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('FdlanXyz#7263')} - Credit : @dkmpostor & @Eskey & @Fadlan
`);

  const auth = rs.question('Tempel Kode Auth deck ! : ');
  consola.warn('');

  while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      consola.error('Kode auth sudah expired ');

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.red('FadlanKull'));
console.log('')
console.log(chalk.green(`Waktu : [ ${moment().format(>
console.log('')
console.log(chalk.bgRed(`Nama anda : ${username}`))
console.log('')
console.log(chalk.yellow(`Trophy : ${trophy}`))
console.log('')
console.log(chalk.blue(`Mahkota : ${crown}`))
      await sleep(3000);


    } else if (result == 'BANNED') {
      console.log(consola.error(`Akun Anda ke band? Gw Party 🤘🤘😎😎 !!`));
     break
    }
  }


})();
