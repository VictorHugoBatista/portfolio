import BannerAsciiResponsive from "../components/banner-ascii-responsive";
import Monitor from '../layout/Monitor';

function NotFoundPage() {
  return (
    <Monitor>
      <>
        <div className="monitor-screen-jumbotron">
          <BannerAsciiResponsive texts={["Not found"]} />
        </div>
      </>
    </Monitor>
  );
}

export default NotFoundPage;
