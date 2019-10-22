import { default as NextHead } from "next/head";

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-125571056-2"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-125571056-2');
      `
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function() {
        window.__insp = window.__insp || [];
        __insp.push(['wid', 47986728]);
        var ldinsp = function(){
        if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=47986728&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
        setTimeout(ldinsp, 0);
        })();
      `
        }}
      />

      <link rel="icon" type="image/png" href="/favicon.png" />
    </NextHead>
  );
};

export default Head;
