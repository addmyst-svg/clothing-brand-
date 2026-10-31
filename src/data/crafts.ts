import { Craft } from '../types';

export const CRAFTS_DATA: Craft[] = [
  {
    id: 'sujini',
    name: 'Sujini Embroidery',
    hindiName: 'सुजिनी कढ़ाई',
    slug: 'sujini-embroidery',
    originRegion: 'Bhusra & Muzaffarpur, Bihar (GI Tagged)',
    status: 'Reviving',
    shortDescription: 'Ancient storytelling running-stitch embroidery where rural women transcribe legends, nature, and personal reflections onto layered textiles.',
    fullHistory: 'Sujini (also spelled Sujani) is a revered needlecraft indigenous to Bihar with Geographical Indication (GI) status. Historically, village women quilted discarded sarees and dhotis with fine running stitches of red, yellow, and blue thread to create warm quilts for newborn babies and brides. The craft evolved into an expressive narrative medium where women chronicle everyday rural lives, social issues, nature motifs, and folk myths.',
    stepProcess: [
      {
        step: 1,
        title: 'Fabric Layering & Tacking',
        description: 'Base cotton or tussar silk fabrics are layered and basted with temporary stitches to achieve gentle structural quilt weight without synthetic batting.'
      },
      {
        step: 2,
        title: 'Story Tracing',
        description: 'Artisans sketch mythological, botanical, and contemporary vignettes directly onto the fabric surface using vegetable chalk or fine charcoal.'
      },
      {
        step: 3,
        title: 'Chain & Running Stitchwork',
        description: 'Contours are delineated using black or indigo thread chain stitches, followed by dense rhythmic running stitches creating textured ripples.'
      },
      {
        step: 4,
        title: 'Final Hand Finishing',
        description: 'Edges are hand-hemmed with contrast thread and steam-pressed using gentle botanical dampeners.'
      }
    ],
    toolsUsed: ['Hand-forged fine embroidery needles', 'Anchor stranded cotton threads', 'Natural wooden hoops', 'Chalk markers'],
    heroImage: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=80',
    culturalSignificance: 'Declared a Geographical Indication craft of Bihar. Traditionally handed down from grandmothers to daughters as an emotional heirloom of female resilience and community camaraderie.',
    productCount: 5
  },
  {
    id: 'madhubani',
    name: 'Madhubani Painting',
    hindiName: 'मधुबनी चित्रकला',
    slug: 'madhubani-painting',
    originRegion: 'Mithila Region, North Bihar',
    status: 'Thriving',
    shortDescription: 'Centuries-old folk art characterized by line drawings filled with natural mineral pigments, portraying harmony between human and cosmos.',
    fullHistory: 'Originating in the ancient Kingdom of Mithila, Madhubani painting was historically practiced by women on the freshly plastered mud walls of their huts during weddings and sacred festivities. The art utilizes natural pigments extracted from turmeric, indigo, kusum flower, and soot, executed with bamboo twigs, nibs, and fingers. Shri Kala incorporates these sacred graphic lines onto organic denim, silk sarees, and contemporary trench wraps.',
    stepProcess: [
      {
        step: 1,
        title: 'Cloth Priming & Organic Sizing',
        description: 'Fabrics are treated in natural myrobalan (harda) baths to make the fibers receptive to water-fast vegetable and pigment inks.'
      },
      {
        step: 2,
        title: 'Double-Line Contouring',
        description: 'Freehand geometrical motifs and deities of nature are outlined with double fine lines without any pre-printed stencils.'
      },
      {
        step: 3,
        title: 'Pigment Infusion',
        description: 'Intricate cross-hatching (kachni) and vibrant color fills (bharni) bring radiant visual depth.'
      },
      {
        step: 4,
        title: 'Heat Setting',
        description: 'Textile-safe fixation ensures the paintings endure gentle wear and dry-cleaning without fading.'
      }
    ],
    toolsUsed: ['Bamboo twig pens', 'Fine camel hair brushes', 'Natural earth pigments', 'Ceramic mixing bowls'],
    heroImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80',
    culturalSignificance: 'A sacred visual grammar of Bihar embodying fertility, devotion, and cosmic celebration. Practiced by master artists across generations.',
    productCount: 6
  },
  {
    id: 'khatwa',
    name: 'Khatwa Applique',
    hindiName: 'खतवा एप्लिक शिल्प',
    slug: 'khatwa-applique',
    originRegion: 'Patna & Madhubani, Bihar',
    status: 'Endangered',
    shortDescription: 'Masterful patchwork cutwork where delicate motifs are cut from contrasting fabric and invisibly blind-stitched onto foundation cloth.',
    fullHistory: 'Khatwa is the traditional applique craft of Bihar, once commissioned for opulent royal shamianas (ceremonial canopies), temple hangings, and dowry wraps. Artisans fold fabric multiple times and cut precise symmetrical motifs—birds, flowering vines, dancing peacocks—with sharp shears, then baste and hem them with microscopic stitches. With fewer master artisans remaining, श्री Kala trains new young women artisans to keep this endangered art alive.',
    stepProcess: [
      {
        step: 1,
        title: 'Pattern Folding & Cutting',
        description: 'Cotton or silk swatches are folded multi-fold and precisely carved by eye into intricate filigree silhouettes.'
      },
      {
        step: 2,
        title: 'Placement & Basting',
        description: 'The open cutwork is positioned meticulously on base fabric and secured with long temporary tacking threads.'
      },
      {
        step: 3,
        title: 'Blind Hem Stitching',
        description: 'Edges are turned inward with the needle tip and secured with virtually invisible hem stitches (turpai).'
      },
      {
        step: 4,
        title: 'Embroidery Accents',
        description: 'Stem stitches and seed knots highlight floral centers and stamens.'
      }
    ],
    toolsUsed: ['Surgical-sharp craft shears', 'Fine milliner needles', 'Ironing press', 'Cotton cambric base'],
    heroImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80',
    culturalSignificance: 'A testament to geometric ingenuity and zero-waste fabric recycling. Identified by craft revivalists as needing urgent market preservation.',
    productCount: 4
  },
  {
    id: 'gota-patti',
    name: 'Gota-Patti Ribbony',
    hindiName: 'गोटा-पत्ती कारीगरी',
    slug: 'gota-patti',
    originRegion: 'North Indian Heritage Craft',
    status: 'Reviving',
    shortDescription: 'Gilded ribbon art where woven gold and silver gota is folded into petal diamonds and stitched onto gossamer silks.',
    fullHistory: 'Gota work originated as royal court ornamentation using genuine gold and silver wire ribbons woven with silk. Strips of gota are folded into intricate rhomboid diamond florets (patti), leafy branches, and geometric edgings. Shri Kala fuses lightweight pure copper-gilded gota on breathable khadi and chanderi, making regal festive wear surprisingly featherweight and easy to style.',
    stepProcess: [
      {
        step: 1,
        title: 'Gota Stripping & Creasing',
        description: 'Fine metallic ribbons are clipped and folded into leaf and petal shapes.'
      },
      {
        step: 2,
        title: 'Fabric Tracing & Tucking',
        description: 'Motif templates are chalked onto the base fabric and pinned.'
      },
      {
        step: 3,
        title: 'Corded Couching Stitches',
        description: 'Artisans secure every leaf point with reinforced couching stitches in tonal silk threads.'
      },
      {
        step: 4,
        title: 'Bead & Pearl Embellishment',
        description: 'Hand-sewn micro pearls and crystals anchor each blossom.'
      }
    ],
    toolsUsed: ['Gold and silver metallic ribbons', 'Embroidery scissors', 'Embroidery frame (Adda)', 'Silk couching thread'],
    heroImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    culturalSignificance: 'The epitome of joyful celebrations, bringing luminous shimmer to celebratory sarees and festive tunics.',
    productCount: 5
  },
  {
    id: 'mirror-work',
    name: 'Shisha Mirror Work',
    hindiName: 'शीशा / मिरर वर्क',
    slug: 'mirror-work',
    originRegion: 'Indian Traditional Needlecraft',
    status: 'Thriving',
    shortDescription: 'Reflective circular glass discs encased in intricate spider-web embroidery frames to reflect light and ward off negative gaze.',
    fullHistory: 'Shisha embroidery traces back centuries to traditional beliefs that shimmering mirrors reflect away evil energy and invite auspicious light. Artisans hold convex and flat mirrors flat against the fabric and weave a cage of anchor threads over the perimeter, locking the glass securely without glue.',
    stepProcess: [
      {
        step: 1,
        title: 'Mirror Placement',
        description: 'Polished glass roundels are held with thumb pressure on the textile weave.'
      },
      {
        step: 2,
        title: 'Cross-Grid Anchoring',
        description: 'Four to eight intersecting foundational stitches establish an overhead suspension cage.'
      },
      {
        step: 3,
        title: 'Buttonhole Radiance',
        description: 'A dense circular chain or buttonhole stitch packs around the rim, drawing the grid tight.'
      },
      {
        step: 4,
        title: 'Accent Stitching',
        description: 'Floret petaling or running stitches surround the mirror frame for added texture.'
      }
    ],
    toolsUsed: ['Tough embroidery needles', 'Flat circular mirrors', 'Mercerized cotton threads', 'Needle threaders'],
    heroImage: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80',
    culturalSignificance: 'Celebrated for its play of light, reflecting India’s festive spirit in day-to-evening contemporary fashion.',
    productCount: 4
  },
  {
    id: 'hand-painting',
    name: 'Hand Painting & Botanical Dyes',
    hindiName: 'हस्त चित्रकारी एवं वानस्पतिक रंग',
    slug: 'hand-painting',
    originRegion: 'Bihar & Bengal Artisanal Corridors',
    status: 'Reviving',
    shortDescription: 'Artisanal brushwork on natural silks and organic handspun cottons using herbal pigments and natural gum mordants.',
    fullHistory: 'Combining freehand brush painting with traditional herbal color extractions like indigo, madder root, pomegranate rind, and marigold petals. Each piece is treated as a unique canvas where no two brushstrokes or dye baths are identical.',
    stepProcess: [
      {
        step: 1,
        title: 'Raw Fiber Desizing',
        description: 'Cotton and silk fabrics are washed in warm water to clear natural oils.'
      },
      {
        step: 2,
        title: 'Botanical Color Crafting',
        description: 'Leaves, bark, and roots are boiled and filtered to produce soft earth-hued pigments.'
      },
      {
        step: 3,
        title: 'Freehand Brush Painting',
        description: 'Painters compose expressive botanical sprigs, fluid rivers, and lotus buds.'
      },
      {
        step: 4,
        title: 'Alum Bath Fixation',
        description: 'Fixing solutions stabilize color fastness without harsh synthetic chemicals.'
      }
    ],
    toolsUsed: ['Natural squirrel and sable hair brushes', 'Mortar & pestle for herbs', 'Copper dye vats'],
    heroImage: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    culturalSignificance: 'A pledge toward slow fashion and conscious ecology, celebrating the unpredictable beauty of natural flora.',
    productCount: 3
  }
];
