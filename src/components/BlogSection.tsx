import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How To Build A List Of Patients And Clients Without Ads",
    excerpt: "What you'll learn Why organic marketing still works in healthcare How to attract clients organically by being clear and consistent Simple healthcare lead generation tactics that don't rely on paid ads...",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Content Ideas To Keep Your Beauty Brand Active On Social Media",
    excerpt: "Key Learnings: Discover actionable content suggestions, to ensure that you always have inspiration for Beauty content. Discover proven Social media tips to increase brand exposure and get your fans talking!",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=200&fit=crop",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Simple Health & Fitness Post Ideas That Get Shared",
    excerpt: "Key Learnings: Find simple and interesting workout post ideas that increase visibility and shares. Find out how to balance your fitness content and your wellness content in external ways that resonate with your audience.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Top 5 Blog Topics That Drive Traffic to Entertainment Sites",
    excerpt: "What you'll learn Which blog topics bring traffic from movie releases and beyond How to turn music industry trends into shareable content Why smart takes on celebrity news keep readers hooked",
    image: "https://images.unsplash.com/photo-1489599433983-619f4b1dd0b6?w=400&h=200&fit=crop",
    readTime: "7 min read"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Blog
          </h2>
          <Button variant="outline" className="hidden md:flex">
            Read More Blogs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden text-center mt-12">
          <Button variant="outline" className="w-full">
            Read More Blogs
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;