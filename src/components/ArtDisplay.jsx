import React, { useState, useEffect } from 'react';
import { Col, Image, Row } from 'antd'


const ArtDisplay = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Fetch the list of image filenames from the server
    fetch('/image-list')
      .then(response => response.json())
      .then(data => setImageList(data))
      .catch(error => console.error('Error fetching image list:', error));
  }, []);

  return (
    <Image.PreviewGroup
      preview={{
        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
      }}
    >
      {/* remove expanded menu on image */}
      <Row gutter={[16, 16]}>
        {imageList.map((imageName, index) => (
          <Col>
            <Image key={`image_${index}`} width={200} src={`/images/${imageName}`} alt={`Image ${index + 1}`} />
          </Col>
        ))}
      </Row>

    </Image.PreviewGroup>
  )
}

export default ArtDisplay