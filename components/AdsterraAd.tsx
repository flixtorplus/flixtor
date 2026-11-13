// components/AdsterraAd.tsx
"use client";

interface AdsterraAdProps {
  adKey?: string;
  width?: number;
  height?: number;
  className?: string;
}

const NEW_BANNER_KEY = "e90978e45f95d0a3b472888c14c8f6c6";

export function AdsterraAd({
  adKey = NEW_BANNER_KEY,
  width = 300,
  height = 250,
  className = "",
}: AdsterraAdProps) {
  const scriptSrc =
    adKey === NEW_BANNER_KEY
      ? `https://bancadeltempoidea.org/22/${adKey}`
      : `https://dessertaskingfund.com/${adKey}/invoke.js`;

  const adHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        </style>
      </head>
      <body>
        <script type="text/javascript">
          atOptions = {
            'key' : '${adKey}',
            'format' : 'iframe',
            'height' : ${height},
            'width' : ${width},
            'params' : {}
          };
        </script>
        <script type="text/javascript" src="${scriptSrc}"></script>
      </body>
    </html>
  `;

  return (
    <div
      className={className}
      style={{
        width,
        height,
        maxWidth: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(10, 14, 20, 0.4)", // reserved space (prevents CLS)
        borderRadius: 8,
      }}
    >
      <iframe
        title={`Advertisement-${adKey}`}
        srcDoc={adHtml}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        style={{ border: 0, overflow: "hidden" }}
      />
    </div>
  );
}