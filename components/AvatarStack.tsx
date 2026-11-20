import avatar1 from "@/assets/images/avatar-learner-1.jpg";
import avatar2 from "@/assets/images/avatar-learner-2.jpg";
import avatar3 from "@/assets/images/avatar-learner-3.jpg";
import avatar4 from "@/assets/images/avatar-learner-4.jpg";
import Photo from "./Photo";

const avatars = [avatar1, avatar2, avatar3, avatar4];

type AvatarStackProps = {
  size?: "sm" | "md";
};

/** Decorative: the text next to it already says what it represents, so alt is empty. */
export default function AvatarStack({ size = "sm" }: AvatarStackProps) {
  const dimension = size === "sm" ? "size-6" : "size-8";

  return (
    <div className="flex -space-x-2" aria-hidden="true">
      {avatars.map((avatar, index) => (
        <Photo
          key={index}
          image={avatar}
          alt=""
          className={`${dimension} border-background-white rounded-full border-2`}
        />
      ))}
    </div>
  );
}
