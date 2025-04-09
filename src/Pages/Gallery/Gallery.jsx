import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  Captions,
  Counter,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import axios from "axios";

const Gallery = () => {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allFoods").then((res) => {
      const newData = res.data.map((dt) => {
        return {
          src: dt.foodImage,
          title: dt.foodName,
          description: dt.description,
          width: 500,
          height: 500,
        };
      });
      setSlides(newData);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-3xl font-bold font-playfair-display text-center mb-8">
        Gallery
      </h2>

      <div className="mx-2">
        <RowsPhotoAlbum
          photos={slides}
          targetRowHeight={250}
          onClick={({ index: current }) => setIndex(current)}
        />

        <Lightbox
          plugins={[Captions, Thumbnails, Counter]}
          captions={{
            showToggle: true,
            descriptionTextAlign: "center",
          }}
          counter={{ container: { style: { top: 20 } } }}
          slides={slides}
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
        ></Lightbox>
      </div>
    </div>
  );
};

export default Gallery;
