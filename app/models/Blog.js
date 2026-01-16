import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
  country: String,
  phone: String,
  email: String,
  latitude: Number,
  longitude: Number,
  hours: String,
  isPrimary: Boolean,
});

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const BlogSchema = new mongoose.Schema(
  {
    // === CORE CONTENT ===
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    urlSlug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // === SEO METADATA ===
    metaTitle: { type: String },
    metaDescription: { type: String },
    canonicalUrl: String,

    // === KEYWORDS ===
    focusKeyword: [String],
    keyword: String,
    intent: {
      type: String,
      enum: [
        "informational",
        "transactional",
        "navigational",
        "commercial",
        "",
      ],
    },

    // === CATEGORIZATION ===
    category: { type: String, default: "Uncategorized", index: true },
    subCategory: String,
    subSubCategory: String,

    // === IMAGES ===
    featuredImage: String,
    imageUrl: String,
    image: String,
    video: String,
    imageAlt: String,
    imageAttribution: String,
    imagePhotographer: String,
    imagePhotographerUrl: String,
    imageSource: String,

    // === STRUCTURED DATA ===
    faqs: [FAQSchema],
    schemaMarkup: String,

    // === RELATIONSHIPS ===
    relatedBlog: [String],
    connectedServices: [String],
    serviceSpecificPage: String,
    oldslug: String,

    // === LOCAL SEO ===
    locations: [LocationSchema],
    businessName: String,
    address: String,
    phone: String,
    websiteName: String,

    // === AUTHOR & SOURCE ===
    author: { type: String, default: "GenForge Studio Team" },
    source: { type: String, default: "manual" },

    // === TRACKING ===
    external_id: { type: String, index: { sparse: true } },
    status: {
      type: String,
      enum: ["visible", "draft", "archived"],
      default: "visible",
      index: true,
    },

    // === QUALITY METRICS ===
    seoScore: { type: Number, min: 0, max: 100 },
    readabilityScore: Number,
    wordCount: Number,

    // === TIMESTAMPS ===
    publishedAt: { type: Date, index: true },
    scheduledFor: Date,
    lastUpdated: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    collection: "blogs",
  }
);

// Indexes
BlogSchema.index({ status: 1, publishedAt: -1 });
BlogSchema.index({ category: 1, status: 1 });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
