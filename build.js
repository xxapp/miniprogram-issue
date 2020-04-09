const ci = require('miniprogram-ci')
const project = new ci.Project({
  // 改成你自己的appid
  appid: '<appid>',
  type: 'miniProgram',
  projectPath: './',
  // 改成你自己的私钥路径
  privateKeyPath: '<privateKeyPath>',
  ignores: ['node_modules/**/*'],
})
console.log(project)
async function run () {
  const warning = await ci.packNpm(project, {
    // ignores: ['pack_npm_ignore_list'],
    reporter: (infos) => { console.log(infos) }
  })

  console.log('构建NPM成功', warning)

  await ci.preview({
    project,
    desc: 'hello',
    qrcodeFormat: 'image',
    qrcodeOutputDest: './destination.jpg',
    setting: {
		"urlCheck": true,
		"es6": true,
		"postcss": true,
		"preloadBackgroundData": false,
		"minified": true,
		"newFeature": true,
		"autoAudits": false,
		"coverView": true,
		"showShadowRootInWxmlPanel": true,
		"scopeDataCheck": false
	},
    onProgressUpdate: console.log,
    pagePath: 'pages/index/index', // 预览页面
  })
  console.log('上传成功')
}

run()