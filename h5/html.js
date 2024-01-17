export default (script) =>
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signature Canvas</title>
  <meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">

  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <style>

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      margin:0;
      overflow: hidden;
      padding-left: <%bodyPaddingHorizontal%>;
      padding-right: <%bodyPaddingHorizontal%>;
    }
    body {
      width: 100%;
    }

    .container {
      margin-top: <%containerMarginTopPercent%> ;
    }

    .title {
      text-align: center;
      margin-bottom: 16px;
      color: grey;
    }


    .m-signature-pad {
      width: 100%;
      height: 100%;
      
    }

    .pad-wrapper {
      background-color: <%padBgColor%>;
      overflow: hidden;
      border-radius: <%padBorderRadius%>
    }

    .canvas-wrapper {
      height: <%canvasWrapperHeight%>;
    }

    .buttonsWrapper {
      background-color: <%buttonsWrapperBgColor%>;
      border-width: 0;
      border-style: solid;
      border-color: <%buttonsWrapperBorderTopColor%>;
      border-top-width: <%buttonsWrapperBorderTopWidth%>;
    }
    
    .m-signature-pad--body {
      position: relative;
    }

    .rotated-true {
      transform: rotate(90deg);
      transform-origin:bottom left;
      position:absolute;
      top: -100vw;
      left: 0;
      height:100vw;
      width:100vh;
      overflow:auto;
    }
    .rotated-false {
      width: 100%;
      height: 100%;
    }
    
    .m-signature-pad--body
      canvas {
        width: 100%;
        height: <%canvasWrapperHeight%>;
      }
    
    .m-signature-pad--footer {
      padding:  10px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;

    }
    
    .m-signature-pad--footer
      .description {
        color: grey;
        text-align: center;
      }
    
    .m-signature-pad--footer
      .button {
        padding: 10px 20px;
        text-align: center;
        border: none;
        font-size: 20px;
        border-radius: 4px;
        outline: none;
        box-shadow: none;
        background-color: <%btnBgColor%>;
        color: <%btnTextColor%>;
      }

    .m-signature-pad--footer
      .clearBtn {
        background-color: <%clearBtnBgColor%>;
        color: <%clearBtnTextColor%>;
      }

    .m-signature-pad--footer
      .saveBtn {
        background-color: <%saveBtnBgColor%>;
        color: <%saveBtnTextColor%>;
      }
    
    .m-signature-pad--footer
      .button.clear {
      }
    
    .m-signature-pad--footer
      .button.save {
      }
    
    @media screen and (max-width: 1024px) {
      .m-signature-pad {
        width: 100%;
        height: 100%;
      }
      #github {
        display: none;
      }
    }
    
    @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      .m-signature-pad {
        margin: 10%;
      }
    }
    
 
    <%style%>
    </style>
</head>
<body onselectstart="return false"  style="background-color: <%bodyBgColor%>;">
  <div class="rotated-<%orientation%> container">

    <div class="title"><h1><%title%></h1></div>

    <div id="signature-pad" class="m-signature-pad pad-wrapper">

      <div class="m-signature-pad--body canvas-wrapper">
        <img style="position: absolute; top: 0; left: 0; pointer-events: none;" src=<%bgSrc%> width=<%bgWidth%> height=<%bgHeight%> />
        <canvas></canvas>
        <img style="position: absolute; top: 0; left: 0; pointer-events: none;" src=<%overlaySrc%> width=<%overlayWidth%> height=<%overlayHeight%> />
      </div>

      <div class="m-signature-pad--footer buttonsWrapper">
        <button type="button" class="button clear clearBtn" data-action="clear"><%clear%></button>
        <div class="description"><%description%></div>
        <button type="button" class="button save saveBtn" data-action="save"><%confirm%></button>
      </div>

    </div>

  </div>

  <script>
    ${script}
  </script>
</body>
</html>`;
