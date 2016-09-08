import test from 'ava';
import execa from 'execa';

process.chdir(__dirname);

test('show help screen', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Get current wifi password/);
});

test('show version', async t => {
	t.is(await execa.stdout('./cli.js', ['--version']), require('./package').version);
});
