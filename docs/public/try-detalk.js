document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        if (window.detalk && document.getElementById("try_detalkjs_here")) {
          detalk.init({
              // 挂载点 (CSS 选择器)
              el: "#try_detalkjs_here", // <div id="detalk"></div>
              // 后端地址
              url: "https://detalkjs-server.cky.im/",
              // 当前页面的路径
              path: window.location.pathname,
              label: {
                  'admin': {
                      name: '管理员',
                      class: 'label-green',
                  },
                  'github': {
                      name: 'GitHub',
                      class: 'label-blue',
                  }
              },
              recaptchaSiteKey: '6LefUdojAAAAAHe0G0p0MaW5U93AnH_G5QViDl92',
              recaptchaLoaded: false,
              pasteImage: async (blob) => {
                  let base64 = (await blobToBase64(blob)).split(',')[1];
                  var suffix = blob.type.split("/")[1];
                  var imgUrl = await fetch("https://p1.ck3.tech/s/", {
                      method: "POST",
                      body: JSON.stringify({
                          content: base64,
                          suffix,
                      })
                  }).then(resp => resp.json());

                  return `https://p1.ck3.tech${imgUrl.url}`;
              }
          });
        }
    }
}