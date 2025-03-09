export function OneLocation() {
  return (
    <iframe
      id="oneLocation"
      className="shadow w-full h-60"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAP_KEY}
            &q=canada"`}
    ></iframe>
  );
}
