// app/components/Map.tsx

const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.4694019241083!2d4.888694076584056!3d44.934124768649276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f559007583c247%3A0xee8c34b5da4c4172!2sAlegria!5e0!3m2!1sfr!2sch!4v1757410055441!5m2!1sfr!2sch";

export function Map() {
  return (
    <div className="relative w-full h-full overflow-hidden sticky top-0">
      <iframe
        src={googleMapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        // className="grayscale invert brightness-90 contrast-120"
      ></iframe>
    </div>
  );
}
