using Microsoft.EntityFrameworkCore;
using LanguageLearningAPI.Models;

namespace LanguageLearningAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<TestResult> TestResults { get; set; }
        public DbSet<VideoLesson> VideoLessons { get; set; }
        public DbSet<VideoLessonViewed> VideoLessonViewed { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure User entity
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Email).IsRequired();
                entity.HasIndex(e => e.Email).IsUnique();
                entity.Property(e => e.Name).IsRequired();
                entity.Property(e => e.PasswordHash).IsRequired();
                entity.Property(e => e.PasswordSalt).IsRequired();
                entity.Property(e => e.CreatedAt).IsRequired();
                
                // Configure UserLanguage as owned entity
                entity.OwnsMany(e => e.Languages, lang =>
                {
                    lang.WithOwner().HasForeignKey("UserId");
                    lang.Property(e => e.Language).IsRequired();
                });
            });

            // Configure Test entity
            modelBuilder.Entity<Test>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired();
                entity.Property(e => e.Language).IsRequired();
                entity.Property(e => e.Level).IsRequired();
                entity.Property(e => e.CreatedAt).IsRequired();
                
                // Configure Questions as owned entity
                entity.OwnsMany(e => e.Questions, q =>
                {
                    q.WithOwner().HasForeignKey("TestId");
                    q.Property(e => e.Id).IsRequired();
                    q.Property(e => e.Type).IsRequired();
                    q.Property(e => e.QuestionText).IsRequired();
                });
            });

            // Configure TestResult entity
            modelBuilder.Entity<TestResult>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.UserId).IsRequired();
                entity.Property(e => e.TestId).IsRequired();
                entity.Property(e => e.Language).IsRequired();
                entity.Property(e => e.CompletedAt).IsRequired();
                
                // Configure QuestionResult as owned entity
                entity.OwnsMany(e => e.Questions, q =>
                {
                    q.WithOwner().HasForeignKey("TestResultId");
                    q.Property(e => e.Id).IsRequired();
                    q.Property(e => e.Question).IsRequired();
                });
            });

            // Configure VideoLesson entity
            modelBuilder.Entity<VideoLesson>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired();
                entity.Property(e => e.Language).IsRequired();
                entity.Property(e => e.VideoUrl).IsRequired();
                entity.Property(e => e.CreatedAt).IsRequired();
            });

            // Configure VideoLessonViewed entity
            modelBuilder.Entity<VideoLessonViewed>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.UserId).IsRequired();
                entity.Property(e => e.LessonId).IsRequired();
                entity.Property(e => e.ViewedAt).IsRequired();
            });
        }
    }
}