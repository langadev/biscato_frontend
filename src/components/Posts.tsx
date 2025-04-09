'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Heart, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';

type Comment = {
  id: string;
  user: string;
  avatar: string;
  text: string;
  timestamp: string;
};

type Post = {
  id: string;
  user: string;
  avatar: string;
  role: string;
  image: string;
  caption: string;
  likes: number;
  timestamp: string;
  comments: Comment[];
  liked: boolean;
  disliked: boolean;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      user: 'Alfredo Langa',
      avatar: '/images/profile.jpg',
      role: 'Full Stack Developer',
      image: '/images/post1.jpg',
      caption: 'Acabei de finalizar este projeto incrível usando React e Node.js! O que acham? #webdev #react',
      likes: 24,
      timestamp: '2 horas atrás',
      liked: false,
      disliked: false,
      comments: [
      //   {
      //     id: 'c1',
      //     user: 'Julieta Macie',
      //     avatar: '/images/ju.PNG',
      //     text: 'Ficou ótimo! Parabéns pelo trabalho.',
      //     timestamp: '1 hora atrás'
      //   }
      ]
    },
    {
      id: '2',
      user: 'Alexandre Sumbane',
      avatar: '/images/alex.PNG',
      role: 'UI/UX Designer',
      image: '/images/post2.jpg',
      caption: 'Novo design de interface que criei para um app de finanças. Feedback? #design #ux',
      likes: 15,
      timestamp: '5 horas atrás',
      liked: false,
      disliked: false,
      comments: []
    },
    {
      id: '3',
      user: 'Didyon Mondlane',
      avatar: '/images/didyon.PNG',
      role: 'Marketing Digital',
      image: '/images/post3.jpg',
      caption: 'Campanha de lançamento do novo produto. Resultados impressionantes! #marketing #digital',
      likes: 32,
      timestamp: '1 dia atrás',
      liked: false,
      disliked: false,
      comments: [
        // {
        //   id: 'c2',
        //   user: 'João Santos',
        //   avatar: '/images/user4.jpg',
        //   text: 'Ótima estratégia! Poderia compartilhar mais detalhes?',
        //   timestamp: '20 horas atrás'
        // }
      ]
    },
    {
      id: '4',
      user: 'Julieta Macie',
      avatar: '/images/ju.PNG',
      role: 'Fotógrafo Profissional',
      image: '/images/post4.jpg',
      caption: 'Sessão de fotos na praia ao pôr do sol. Natureza em seu melhor momento! #fotografia #natureza',
      likes: 45,
      timestamp: '2 dias atrás',
      liked: false,
      disliked: false,
      comments: []
    }
  ]);

  const [newComments, setNewComments] = useState<{[key: string]: string}>({});

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const alreadyLiked = post.liked;
        return {
          ...post,
          liked: !alreadyLiked,
          disliked: false,
          likes: alreadyLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handleDislike = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const alreadyDisliked = post.disliked;
        return {
          ...post,
          disliked: !alreadyDisliked,
          liked: false,
          likes: alreadyDisliked ? post.likes : post.likes - 1
        };
      }
      return post;
    }));
  };

  const handleCommentChange = (postId: string, text: string) => {
    setNewComments({
      ...newComments,
      [postId]: text
    });
  };

  const addComment = (postId: string) => {
    if (!newComments[postId]?.trim()) return;

    const newComment: Comment = {
      id: `c${Date.now()}`,
      user: 'Você',
      avatar: '/images/profile.jpg',
      text: newComments[postId],
      timestamp: 'Agora'
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));

    setNewComments({
      ...newComments,
      [postId]: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 mb-6 text-gray-800 mt-6">
      {/* Grid Layout - changes based on screen size */}
      <h1 className='text-3xl font-bold text-center'>Encontre os melhores freelancers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Post Header */}
            <div className="flex items-center p-4">
              <Image 
                src={post.avatar} 
                width={40} 
                height={40} 
                alt={`${post.user}'s avatar`} 
                className="rounded-full"
              />
              <div className="ml-3">
                <h3 className="font-semibold">{post.user}</h3>
                <p className="text-sm text-gray-500">{post.role}</p>
              </div>
              <button className="ml-auto text-gray-500">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Post Image */}
            <div className="relative aspect-square bg-gray-100">
              <Image 
                src={post.image} 
                fill 
                alt="Post image" 
                className="object-cover"
              />
            </div>

            {/* Post Content */}
            <div className="p-4 flex-grow flex flex-col">
              {/* Post Actions */}
              <div className="flex space-x-4 mb-2">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center ${post.liked ? 'text-red-500' : 'text-gray-500'}`}
                >
                  <Heart size={24} fill={post.liked ? 'currentColor' : 'none'} />
                </button>
                <button 
                  onClick={() => handleDislike(post.id)}
                  className={`flex items-center ${post.disliked ? 'text-blue-500' : 'text-gray-500'}`}
                >
                  <Heart size={24} fill={post.disliked ? 'currentColor' : 'none'} className="rotate-180" />
                </button>
                <button className="text-gray-500">
                  <MessageSquare size={24} />
                </button>
                <button className="text-gray-500 ml-auto">
                  <Share2 size={24} />
                </button>
              </div>

              {/* Likes */}
              <p className="font-semibold">{post.likes} curtidas</p>

              {/* Caption */}
              <p className="mt-1">
                <span className="font-semibold mr-2">{post.user}</span>
                {post.caption}
              </p>

              {/* Timestamp */}
              <p className="text-xs text-gray-400 mt-2">{post.timestamp}</p>

              {/* Comments - Show only 2 comments with "View more" option */}
              {post.comments.length > 0 && (
                <div className="mt-3 space-y-2">
                  {post.comments.slice(0, 2).map(comment => (
                    <div key={comment.id} className="flex">
                      <Image 
                        src={comment.avatar} 
                        width={32} 
                        height={32} 
                        alt={`${comment.user}'s avatar`} 
                        className="rounded-full mr-2"
                      />
                      <div className="bg-gray-100 rounded-lg px-3 py-2 flex-1">
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">{comment.user}</span>
                          <span className="text-xs text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                  {post.comments.length > 2 && (
                    <button className="text-sm text-gray-500 hover:text-gray-700">
                      Ver mais {post.comments.length - 2} comentários
                    </button>
                  )}
                </div>
              )}

              {/* Add Comment */}
              <div className="flex items-center mt-4 border-t pt-3">
                <Image 
                  src="/images/profile.jpg" 
                  width={32} 
                  height={32} 
                  alt="Your avatar" 
                  className="rounded-full mr-2"
                />
                <input
                  type="text"
                  placeholder="Adicione um comentário..."
                  className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                  value={newComments[post.id] || ''}
                  onChange={(e) => handleCommentChange(post.id, e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addComment(post.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}