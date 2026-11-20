import graduate from "@/assets/images/people-graduate-diploma.jpg";
import onlineClass from "@/assets/images/people-online-class.jpg";
import studentBackpack from "@/assets/images/people-student-backpack.jpg";
import studentLaptop from "@/assets/images/people-student-laptop.jpg";
import studentNotebook from "@/assets/images/people-student-notebook.jpg";
import outdoorPortrait from "@/assets/images/people-student-outdoor-portrait.jpg";
import studentReading from "@/assets/images/people-student-reading.jpg";
import studentStudying from "@/assets/images/people-student-studying.jpg";
import studentsGroup from "@/assets/images/people-students-group.jpg";
import studyPair from "@/assets/images/people-study-pair.jpg";
import Button from "./Button";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Photo from "./Photo";
import Reveal from "./Reveal";

/** Staggered collage: each column has a vertical offset and a list of photos with their shape. */
const columns = [
  {
    offset: "mt-12",
    photos: [
      {
        image: studentNotebook,
        ratio: "aspect-[4/5]",
        alt: "Student smiling and writing in a notebook at a desk",
      },
      {
        image: studyPair,
        ratio: "aspect-square",
        style: "border border-red-500 h-[207px] w-[138px]",
        alt: "Two students studying together at a table with books",
      },
    ],
  },
  {
    offset: "mt-0",
    photos: [
      {
        image: studentReading,
        ratio: "aspect-square",
        alt: "Student reading a book next to a window",
      },
      {
        image: studentsGroup,
        ratio: "aspect-square",
        alt: "Group of international students laughing together",
      },

      {
        image: studentStudying,
        ratio: "aspect-square",
        alt: "Student reading a book next to a window",
      },
    ],
  },
  {
    offset: "mt-6",
    photos: [
      {
        image: graduate,
        ratio: "aspect-[3/4]",
        alt: "Graduate in a cap and gown holding a diploma",
      },
      {
        image: studentLaptop,
        ratio: "aspect-[4/5]",
        alt: "Student working on a laptop at a desk",
      },
      {
        image: onlineClass,
        ratio: "aspect-square",
        alt: "Woman attending an online class on a laptop video call",
      },
    ],
  },
  {
    offset: "mt-2",
    photos: [
      {
        image: outdoorPortrait,
        ratio: "aspect-[4/5]",
        alt: "Smiling woman with curly hair posing outdoors",
      },
      {
        image: studentBackpack,
        ratio: "aspect-[4/5]",
        alt: "Smiling student carrying a backpack on campus",
      },
    ],
  },
];

export default function People() {
  return (
    <section
      id="people"
      className="bg-background-light-yellow scroll-mt-4 overflow-hidden py-16 lg:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>The people</Eyebrow>
          <h2 className="mt-4 max-w-md text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
            Meet international students &amp; teachers
          </h2>
          <p className="text-text-secondary mt-5 max-w-md text-sm leading-relaxed">
            Morbi et egestas dignissim pharetra, sed amet. Tempus justo senectus
            risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
            facilisi nec magna hendrerit. Placerat ipsum sit tellus urna,
            faucibus aenean lorem faucibus integer.
          </p>
          <Button href="#contact" variant="secondary" className="mt-7">
            Explore teachers and students
          </Button>
        </Reveal>

        <Reveal
          delay={100}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="bg-primary-blue-light absolute inset-x-6 -top-6 -bottom-6 rounded-full lg:inset-x-10"
          />
          <div className="relative grid grid-cols-4 gap-1 border px-6 sm:gap-3 lg:px-10">
            {columns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex flex-col items-end gap-2 border sm:gap-3 ${column.offset}`}
              >
                {column.photos.map((photo) => (
                  <Photo
                    key={photo.alt}
                    image={photo.image}
                    alt={photo.alt}
                    className={`${photo.ratio} ${photo.style} h-37.5 w-20 rounded-lg`}
                  />
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
