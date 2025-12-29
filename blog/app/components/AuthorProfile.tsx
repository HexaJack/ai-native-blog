import Image from 'next/image';

interface AuthorProfileProps {
  author: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
}

const AuthorProfile = ({ author }: AuthorProfileProps) => {
  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
      <Image
        src={author.avatarUrl}
        alt={`${author.name}'s avatar`}
        width={80}
        height={80}
        className="rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{author.name} sir</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{author.bio}</p>
      </div>
    </div>
  );
};

export default AuthorProfile;
