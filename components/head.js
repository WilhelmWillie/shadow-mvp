import Head from 'next/head'

const CustomHead = (props) => {
  // TODO: Add GA tag + Inspectlet

  /*
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125571056-2"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-125571056-2');
    </script>
  */

  /*
    <!-- Begin Inspectlet Asynchronous Code -->
    <script type="text/javascript">
    (function() {
    window.__insp = window.__insp || [];
    __insp.push(['wid', 47986728]);
    var ldinsp = function(){
    if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=47986728&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
    setTimeout(ldinsp, 0);
    })();
    </script>
    <!-- End Inspectlet Asynchronous Code -->
  */

  return (
    <Head>
      <title>{props.title}</title>

      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />

      <link rel="icon" type="image/png" href="/static/favicon.png" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
    </Head>
  )
}

export default CustomHead
