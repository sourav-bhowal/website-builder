import type { Config } from "@measured/puck";
import { ColorPicker } from "./components/ui/color-picker";

// Color picker field component for Puck
const ColorPickerField = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
  <ColorPicker
    value={value || "#000000"}
    onChange={onChange}
    className="w-full"
  />
);

// Enhanced color palette with theme integration
const colorPalette = [
  { label: "Theme Primary", value: "var(--theme-primary)" },
  { label: "Theme Secondary", value: "var(--theme-secondary)" },
  { label: "Theme Accent", value: "var(--theme-accent)" },
  { label: "Theme Text", value: "var(--theme-text)" },
  { label: "Theme Text Secondary", value: "var(--theme-text-secondary)" },
  { label: "Primary Blue", value: "#3b82f6" },
  { label: "Primary Green", value: "#10b981" },
  { label: "Primary Purple", value: "#8b5cf6" },
  { label: "Primary Red", value: "#ef4444" },
  { label: "Primary Orange", value: "#f97316" },
  { label: "Primary Yellow", value: "#eab308" },
  { label: "Primary Pink", value: "#ec4899" },
  { label: "Primary Indigo", value: "#6366f1" },
  { label: "Primary Teal", value: "#14b8a6" },
  { label: "Primary Cyan", value: "#06b6d4" },

  // Neutral colors
  { label: "Black", value: "#000000" },
  { label: "White", value: "#ffffff" },
  { label: "Gray 900", value: "#111827" },
  { label: "Gray 800", value: "#1f2937" },
  { label: "Gray 700", value: "#374151" },
  { label: "Gray 600", value: "#4b5563" },
  { label: "Gray 500", value: "#6b7280" },
  { label: "Gray 400", value: "#9ca3af" },
  { label: "Gray 300", value: "#d1d5db" },
  { label: "Gray 200", value: "#e5e7eb" },
  { label: "Gray 100", value: "#f3f4f6" },
  { label: "Gray 50", value: "#f9fafb" },

  // Light variants
  { label: "Light Blue", value: "#dbeafe" },
  { label: "Light Green", value: "#d1fae5" },
  { label: "Light Purple", value: "#ede9fe" },
  { label: "Light Red", value: "#fee2e2" },
  { label: "Light Orange", value: "#fed7aa" },
  { label: "Light Yellow", value: "#fef3c7" },
  { label: "Light Pink", value: "#fce7f3" },

  // Dark variants
  { label: "Dark Blue", value: "#1e40af" },
  { label: "Dark Green", value: "#047857" },
  { label: "Dark Purple", value: "#6d28d9" },
  { label: "Dark Red", value: "#b91c1c" },
  { label: "Dark Orange", value: "#c2410c" },
  { label: "Dark Yellow", value: "#a16207" },
  { label: "Dark Pink", value: "#be185d" },
];

// Background color palette (includes transparencies and gradients)
const backgroundColorPalette = [
  ...colorPalette,
  { label: "Theme Background", value: "var(--theme-background)" },
  { label: "Theme Surface", value: "var(--theme-surface)" },
  { label: "Transparent", value: "transparent" },
  { label: "Semi-transparent Black", value: "rgba(0, 0, 0, 0.1)" },
  { label: "Semi-transparent White", value: "rgba(255, 255, 255, 0.9)" },
  {
    label: "Gradient Blue",
    value: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  },
  {
    label: "Gradient Green",
    value: "linear-gradient(135deg, #10b981, #047857)",
  },
  {
    label: "Gradient Purple",
    value: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  },
  {
    label: "Gradient Sunset",
    value: "linear-gradient(135deg, #f97316, #ec4899)",
  },
];

type Props = {
  HeadingBlock: {
    title: string;
    fontSize: number;
    fontWeight: "normal" | "bold" | "light";
    color: string;
    textAlign: "left" | "center" | "right";
  };
  TextBlock: {
    text: string;
    fontSize: number;
    fontWeight: "normal" | "bold" | "light";
    color: string;
    textAlign: "left" | "center" | "right";
  };
  GridContainer: {
    columns: number;
    gap: number;
    items: Array<{
      content: string;
      backgroundColor: string;
      textColor: string;
      padding: number;
      textAlignment: "left" | "center" | "right";
    }>;
  };
  Button: {
    text: string;
    backgroundColor: string;
    textColor: string;
    fontSize: number;
    padding: number;
    borderRadius: number;
    alignment: "left" | "center" | "right";
    link: string;
    target: "_self" | "_blank";
  };
  Image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    alignment: "left" | "center" | "right";
  };
  Container: {
    backgroundColor: string;
    padding: number;
    borderRadius: number;
    alignment: "left" | "center" | "right";
    shadow: "none" | "soft" | "medium" | "strong";
    borderWidth: number;
    borderColor: string;
  };
  Spacer: {
    height: number;
  };
  Hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    overlayColor: string;
    overlayOpacity: number;
    textColor: string;
    buttonText: string;
    buttonLink: string;
    height: number;
  };
  Navigation: {
    logo: string;
    logoText: string;
    menuItems: Array<{
      label: string;
      link: string;
    }>;
    backgroundColor: string;
    textColor: string;
    sticky: boolean;
  };
  Footer: {
    backgroundColor: string;
    textColor: string;
    columns: Array<{
      title: string;
      links: Array<{
        label: string;
        link: string;
      }>;
    }>;
    showSocial: boolean;
    copyrightText: string;
  };
  Card: {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
    backgroundColor: string;
    textColor: string;
    shadow: "none" | "soft" | "medium" | "strong";
  };
  Gallery: {
    images: Array<{
      src: string;
      alt: string;
      caption: string;
    }>;
    columns: number;
    gap: number;
    showCaptions: boolean;
  };
  ContactForm: {
    title: string;
    fields: Array<{
      label: string;
      type: "text" | "email" | "textarea";
      required: boolean;
    }>;
    buttonText: string;
    backgroundColor: string;
    textColor: string;
  };
  Testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
    backgroundColor: string;
    textColor: string;
  };
  Stats: {
    items: Array<{
      number: string;
      label: string;
      icon: string;
    }>;
    backgroundColor: string;
    textColor: string;
  };
  VideoEmbed: {
    videoUrl: string;
    width: number;
    height: number;
    alignment: "left" | "center" | "right";
    autoplay: boolean;
  };
  Array: { items: { title: string }[] };
  Radio: { textAlign: "left" | "right" };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
        fontSize: { type: "number" },
        fontWeight: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Bold", value: "bold" },
            { label: "Light", value: "light" },
          ],
        },
        color: {
          type: "custom",
          render: ColorPickerField,
        },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        title: "Heading",
        fontSize: 32,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
      },
      render: ({ title, fontSize, fontWeight, color, textAlign }) => (
        <div style={{ padding: 20, textAlign }}>
          <h1
            style={{
              fontSize: `${fontSize}px`,
              fontWeight,
              color,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>
      ),
    },
    TextBlock: {
      fields: {
        text: { type: "textarea" },
        fontSize: { type: "number" },
        fontWeight: {
          type: "select",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Bold", value: "bold" },
            { label: "Light", value: "light" },
          ],
        },
        color: {
          type: "custom",
          render: ColorPickerField,
        },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        text: "Your text here...",
        fontSize: 16,
        fontWeight: "normal",
        color: "#333333",
        textAlign: "left",
      },
      render: ({ text, fontSize, fontWeight, color, textAlign }) => (
        <div style={{ padding: 10, textAlign }}>
          <p
            style={{
              fontSize: `${fontSize}px`,
              fontWeight,
              color,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {text}
          </p>
        </div>
      ),
    },
    GridContainer: {
      fields: {
        columns: { type: "number" },
        gap: { type: "number" },
        items: {
          type: "array",
          arrayFields: {
            content: { type: "textarea" },
            backgroundColor: {
              type: "custom",
              render: ColorPickerField,
            },
            textColor: {
              type: "custom",
              render: ColorPickerField,
            },
            padding: { type: "number" },
            textAlignment: {
              type: "radio",
              options: [
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ],
            },
          },
        },
      },
      defaultProps: {
        columns: 3,
        gap: 20,
        items: [
          {
            content: "Grid Item 1",
            backgroundColor: "#f0f0f0",
            textColor: "#000",
            padding: 20,
            textAlignment: "center",
          },
          {
            content: "Grid Item 2",
            backgroundColor: "#e0e0e0",
            textColor: "#000",
            padding: 20,
            textAlignment: "center",
          },
          {
            content: "Grid Item 3",
            backgroundColor: "#d0d0d0",
            textColor: "#000",
            padding: 20,
            textAlignment: "center",
          },
        ],
      },
      render: ({ columns, gap, items }) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: `${gap}px`,
            padding: 20,
          }}
        >
          {items &&
            items.map((item, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: item.backgroundColor,
                  color: item.textColor,
                  padding: `${item.padding}px`,
                  borderRadius: "8px",
                  textAlign: item.textAlignment,
                  minHeight: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    item.textAlignment === "center"
                      ? "center"
                      : item.textAlignment === "right"
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                {item.content}
              </div>
            ))}
        </div>
      ),
    },
    Button: {
      fields: {
        text: { type: "text" },
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
        fontSize: { type: "number" },
        padding: { type: "number" },
        borderRadius: { type: "number" },
        alignment: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        link: { type: "text" },
        target: {
          type: "radio",
          options: [
            { label: "Same Window", value: "_self" },
            { label: "New Window", value: "_blank" },
          ],
        },
      },
      defaultProps: {
        text: "Click Me",
        backgroundColor: "#007bff",
        textColor: "#ffffff",
        fontSize: 16,
        padding: 12,
        borderRadius: 6,
        alignment: "center",
        link: "#",
        target: "_self",
      },
      render: ({
        text,
        backgroundColor,
        textColor,
        fontSize,
        padding,
        borderRadius,
        alignment,
        link,
        target,
      }) => (
        <div style={{ padding: 10, textAlign: alignment }}>
          <a href={link} target={target} style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor,
                color: textColor,
                fontSize: `${fontSize}px`,
                padding: `${padding}px ${padding * 2}px`,
                borderRadius: `${borderRadius}px`,
                border: "none",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
            >
              {text}
            </button>
          </a>
        </div>
      ),
    },
    Image: {
      fields: {
        src: { type: "text" },
        alt: { type: "text" },
        width: { type: "number" },
        height: { type: "number" },
        alignment: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        src: "https://via.placeholder.com/400x200",
        alt: "Placeholder image",
        width: 400,
        height: 200,
        alignment: "center",
      },
      render: ({ src, alt, width, height, alignment }) => (
        <div style={{ padding: 10, textAlign: alignment }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </div>
      ),
    },
    Container: {
      fields: {
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        padding: { type: "number" },
        borderRadius: { type: "number" },
        alignment: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        shadow: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Soft", value: "soft" },
            { label: "Medium", value: "medium" },
            { label: "Strong", value: "strong" },
          ],
        },
        borderWidth: { type: "number" },
        borderColor: {
          type: "custom",
          render: ColorPickerField,
        },
      },
      defaultProps: {
        backgroundColor: "#f8f9fa",
        padding: 30,
        borderRadius: 12,
        alignment: "center",
        shadow: "soft",
        borderWidth: 0,
        borderColor: "#e0e0e0",
      },
      render: ({
        backgroundColor,
        padding,
        borderRadius,
        alignment,
        shadow,
        borderWidth,
        borderColor,
      }) => {
        const getShadowStyle = (shadowType) => {
          const shadows = {
            none: "none",
            soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
            medium:
              "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            strong:
              "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          };
          return shadows[shadowType] || shadows.none;
        };

        return (
          <div
            style={{
              backgroundColor,
              padding: `${padding}px`,
              borderRadius: `${borderRadius}px`,
              margin: "10px 0",
              textAlign: alignment,
              minHeight: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent:
                alignment === "center"
                  ? "center"
                  : alignment === "right"
                  ? "flex-end"
                  : "flex-start",
              borderWidth: `${borderWidth}px`,
              borderColor: borderWidth > 0 ? borderColor : "transparent",
              borderStyle: borderWidth > 0 ? "solid" : "none",
              boxShadow: getShadowStyle(shadow),
            }}
          >
            <p style={{ margin: 0, color: "#666" }}>Drop components here</p>
          </div>
        );
      },
    },
    Spacer: {
      fields: {
        height: { type: "number" },
      },
      defaultProps: {
        height: 40,
      },
      render: ({ height }) => <div style={{ height: `${height}px` }}></div>,
    },
    Array: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
        },
      },
      defaultProps: {
        items: [],
      },
      render: ({ items }) => {
        return (
          <ul>
            {items && items.map((item, i) => <li key={i}>{item.title}</li>)}
          </ul>
        );
      },
    },
    Hero: {
      fields: {
        title: { type: "text" },
        subtitle: { type: "textarea" },
        backgroundImage: { type: "text" },
        overlayColor: {
          type: "custom",
          render: ColorPickerField,
        },
        overlayOpacity: { type: "number" },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
        buttonText: { type: "text" },
        buttonLink: { type: "text" },
        height: { type: "number" },
      },
      defaultProps: {
        title: "Welcome to Our Website",
        subtitle: "Create amazing experiences with our platform",
        backgroundImage: "https://via.placeholder.com/1920x800",
        overlayColor: "#000000",
        overlayOpacity: 0.4,
        textColor: "#ffffff",
        buttonText: "Get Started",
        buttonLink: "#",
        height: 600,
      },
      render: ({
        title,
        subtitle,
        backgroundImage,
        overlayColor,
        overlayOpacity,
        textColor,
        buttonText,
        buttonLink,
        height,
      }) => (
        <div
          style={{
            position: "relative",
            height: `${height}px`,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          />
          <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", padding: "0 20px" }}>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: textColor,
                marginBottom: "20px",
                margin: 0,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: textColor,
                marginBottom: "30px",
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </p>
            <a
              href={buttonLink}
              style={{
                display: "inline-block",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                padding: "15px 30px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      ),
    },
    Navigation: {
      fields: {
        logo: { type: "text" },
        logoText: { type: "text" },
        menuItems: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            link: { type: "text" },
          },
        },
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
        sticky: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        logo: "",
        logoText: "Your Logo",
        menuItems: [
          { label: "Home", link: "#" },
          { label: "About", link: "#about" },
          { label: "Services", link: "#services" },
          { label: "Contact", link: "#contact" },
        ],
        backgroundColor: "#ffffff",
        textColor: "#000000",
        sticky: true,
      },
      render: ({ logo, logoText, menuItems, backgroundColor, textColor, sticky }) => (
        <nav
          style={{
            backgroundColor,
            padding: "15px 20px",
            position: sticky ? "sticky" : "static",
            top: 0,
            zIndex: 1000,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {logo && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ height: "40px", marginRight: "10px" }}
                  />
                </>
              )}
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: textColor,
                }}
              >
                {logoText}
              </span>
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              {menuItems &&
                menuItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    style={{
                      color: textColor,
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
            </div>
          </div>
        </nav>
      ),
    },
    Footer: {
      fields: {
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
        columns: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
            links: {
              type: "array",
              arrayFields: {
                label: { type: "text" },
                link: { type: "text" },
              },
            },
          },
        },
        showSocial: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
        copyrightText: { type: "text" },
      },
      defaultProps: {
        backgroundColor: "#1f2937",
        textColor: "#ffffff",
        columns: [
          {
            title: "Company",
            links: [
              { label: "About Us", link: "#" },
              { label: "Careers", link: "#" },
              { label: "Contact", link: "#" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "Web Design", link: "#" },
              { label: "Development", link: "#" },
              { label: "Consulting", link: "#" },
            ],
          },
        ],
        showSocial: true,
        copyrightText: "© 2024 Your Company. All rights reserved.",
      },
      render: ({ backgroundColor, textColor, columns, showSocial, copyrightText }) => (
        <footer style={{ backgroundColor, color: textColor, padding: "50px 20px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns?.length || 2}, 1fr)`,
                gap: "40px",
                marginBottom: "40px",
              }}
            >
              {columns &&
                columns.map((column, i) => (
                  <div key={i}>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        color: textColor,
                      }}
                    >
                      {column.title}
                    </h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      {column.links &&
                        column.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.link}
                            style={{
                              color: textColor,
                              textDecoration: "none",
                              opacity: 0.8,
                              transition: "opacity 0.3s ease",
                            }}
                          >
                            {link.label}
                          </a>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
            {showSocial && (
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  marginBottom: "30px",
                }}
              >
                <a href="#" style={{ color: textColor, fontSize: "24px" }}>📘</a>
                <a href="#" style={{ color: textColor, fontSize: "24px" }}>🐦</a>
                <a href="#" style={{ color: textColor, fontSize: "24px" }}>📷</a>
                <a href="#" style={{ color: textColor, fontSize: "24px" }}>💼</a>
              </div>
            )}
            <div
              style={{
                textAlign: "center",
                paddingTop: "20px",
                borderTop: `1px solid ${textColor}33`,
                opacity: 0.7,
              }}
            >
              {copyrightText}
            </div>
          </div>
        </footer>
      ),
    },
    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        image: { type: "text" },
        buttonText: { type: "text" },
        buttonLink: { type: "text" },
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
        shadow: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Soft", value: "soft" },
            { label: "Medium", value: "medium" },
            { label: "Strong", value: "strong" },
          ],
        },
      },
      defaultProps: {
        title: "Card Title",
        description: "This is a description of the card content.",
        image: "https://via.placeholder.com/300x200",
        buttonText: "Learn More",
        buttonLink: "#",
        backgroundColor: "#ffffff",
        textColor: "#000000",
        shadow: "medium",
      },
      render: ({
        title,
        description,
        image,
        buttonText,
        buttonLink,
        backgroundColor,
        textColor,
        shadow,
      }) => {
        const getShadowStyle = (shadowType) => {
          const shadows = {
            none: "none",
            soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
            medium: "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            strong: "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          };
          return shadows[shadowType] || shadows.none;
        };

        return (
          <div
            style={{
              backgroundColor,
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: getShadowStyle(shadow),
              margin: "10px",
              maxWidth: "350px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: textColor,
                  marginBottom: "10px",
                  margin: 0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: textColor,
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  opacity: 0.8,
                }}
              >
                {description}
              </p>
              <a
                href={buttonLink}
                style={{
                  display: "inline-block",
                  backgroundColor: "#3b82f6",
                  color: "#ffffff",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                {buttonText}
              </a>
            </div>
          </div>
        );
      },
    },
    Gallery: {
      fields: {
        images: {
          type: "array",
          arrayFields: {
            src: { type: "text" },
            alt: { type: "text" },
            caption: { type: "text" },
          },
        },
        columns: { type: "number" },
        gap: { type: "number" },
        showCaptions: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        images: [
          { src: "https://via.placeholder.com/300x200", alt: "Image 1", caption: "Beautiful landscape" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 2", caption: "City view" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 3", caption: "Nature scene" },
          { src: "https://via.placeholder.com/300x200", alt: "Image 4", caption: "Architecture" },
        ],
        columns: 2,
        gap: 20,
        showCaptions: true,
      },
      render: ({ images, columns, gap, showCaptions }) => (
        <div style={{ padding: "20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: `${gap}px`,
            }}
          >
            {images &&
              images.map((image, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  {showCaptions && image.caption && (
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "14px",
                        color: "#666",
                        fontStyle: "italic",
                      }}
                    >
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      ),
    },
    ContactForm: {
      fields: {
        title: { type: "text" },
        fields: {
          type: "array",
          arrayFields: {
            label: { type: "text" },
            type: {
              type: "select",
              options: [
                { label: "Text", value: "text" },
                { label: "Email", value: "email" },
                { label: "Textarea", value: "textarea" },
              ],
            },
            required: {
              type: "radio",
              options: [
                { label: "Yes", value: true },
                { label: "No", value: false },
              ],
            },
          },
        },
        buttonText: { type: "text" },
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
      },
      defaultProps: {
        title: "Contact Us",
        fields: [
          { label: "Name", type: "text", required: true },
          { label: "Email", type: "email", required: true },
          { label: "Message", type: "textarea", required: true },
        ],
        buttonText: "Send Message",
        backgroundColor: "#f9fafb",
        textColor: "#000000",
      },
      render: ({ title, fields, buttonText, backgroundColor, textColor }) => (
        <div
          style={{
            backgroundColor,
            padding: "40px 20px",
            borderRadius: "12px",
            margin: "20px",
            maxWidth: "600px",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: textColor,
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            {title}
          </h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {fields &&
              fields.map((field, i) => (
                <div key={i}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: textColor,
                    }}
                  >
                    {field.label} {field.required && <span style={{ color: "red" }}>*</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db",
                        fontSize: "16px",
                        boxSizing: "border-box",
                      }}
                    />
                  ) : (
                    <input
                      type={field.type}
                      style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #d1d5db",
                        fontSize: "16px",
                        boxSizing: "border-box",
                      }}
                    />
                  )}
                </div>
              ))}
            <button
              type="submit"
              style={{
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                padding: "15px 30px",
                borderRadius: "8px",
                border: "none",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              {buttonText}
            </button>
          </form>
        </div>
      ),
    },
    Testimonial: {
      fields: {
        quote: { type: "textarea" },
        author: { type: "text" },
        position: { type: "text" },
        avatar: { type: "text" },
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
      },
      defaultProps: {
        quote: "This is an amazing service that has transformed our business completely.",
        author: "John Doe",
        position: "CEO, Company Inc.",
        avatar: "https://via.placeholder.com/80x80",
        backgroundColor: "#f9fafb",
        textColor: "#000000",
      },
      render: ({ quote, author, position, avatar, backgroundColor, textColor }) => (
        <div
          style={{
            backgroundColor,
            padding: "40px",
            borderRadius: "12px",
            textAlign: "center",
            margin: "20px",
            maxWidth: "600px",
            boxShadow: "0 4px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <blockquote
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              color: textColor,
              marginBottom: "30px",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
                        &ldquo;{quote}&rdquo;
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "15px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatar}
              alt={author}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: textColor,
                }}
              >
                {author}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: textColor,
                  opacity: 0.7,
                }}
              >
                {position}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    Stats: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            number: { type: "text" },
            label: { type: "text" },
            icon: { type: "text" },
          },
        },
        backgroundColor: {
          type: "custom",
          render: ColorPickerField,
        },
        textColor: {
          type: "custom",
          render: ColorPickerField,
        },
      },
      defaultProps: {
        items: [
          { number: "10,000+", label: "Happy Customers", icon: "👥" },
          { number: "5", label: "Years Experience", icon: "🏆" },
          { number: "50+", label: "Projects Completed", icon: "✅" },
          { number: "24/7", label: "Support Available", icon: "🕒" },
        ],
        backgroundColor: "#3b82f6",
        textColor: "#ffffff",
      },
      render: ({ items, backgroundColor, textColor }) => (
        <div
          style={{
            backgroundColor,
            padding: "60px 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(items?.length || 4, 4)}, 1fr)`,
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {items &&
              items.map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "48px", marginBottom: "10px" }}>{item.icon}</div>
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: textColor,
                      marginBottom: "5px",
                    }}
                  >
                    {item.number}
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      color: textColor,
                      opacity: 0.9,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ),
    },
    VideoEmbed: {
      fields: {
        videoUrl: { type: "text" },
        width: { type: "number" },
        height: { type: "number" },
        alignment: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        autoplay: {
          type: "radio",
          options: [
            { label: "Yes", value: true },
            { label: "No", value: false },
          ],
        },
      },
      defaultProps: {
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        width: 560,
        height: 315,
        alignment: "center",
        autoplay: false,
      },
      render: ({ videoUrl, width, height, alignment, autoplay }) => (
        <div style={{ padding: "20px", textAlign: alignment }}>
          <iframe
            src={`${videoUrl}${autoplay ? "?autoplay=1" : ""}`}
            width={width}
            height={height}
            style={{
              borderRadius: "8px",
              border: "none",
              maxWidth: "100%",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ),
    },
    Radio: {
      fields: {
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        textAlign: "left",
      },
      render: ({ textAlign }) => {
        return <p style={{ textAlign }}>Hello, world</p>;
      },
    },
  },
  categories: {
    layout: {
      components: ["Hero", "Navigation", "Footer", "Container", "GridContainer", "Spacer"],
    },
    typography: {
      components: ["HeadingBlock", "TextBlock"],
    },
    interactive: {
      components: ["Button", "ContactForm"],
    },
    media: {
      components: ["Image", "Gallery", "VideoEmbed"],
    },
    content: {
      components: ["Card", "Testimonial", "Stats"],
    },
    forms: {
      components: ["Radio"],
    },
    data: {
      components: ["Array"],
    },
  },
};

export default config;
