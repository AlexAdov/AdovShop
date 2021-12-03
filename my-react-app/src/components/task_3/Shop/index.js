import Listing from './Listing';
import data from './etsy';


export function Shop() {
  return (
    <div className="bl listing">
      <Listing items={data} />
    </div>
  );
}
