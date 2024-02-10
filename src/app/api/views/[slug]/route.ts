import db from "@/libs/db";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;

  const snapshot = await db.ref("views").child(slug).get();
  const views = snapshot.val();

  return Response.json({ total: views });
}

export async function POST(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;

  const ref = db.ref("views").child(slug);
  const { snapshot } = await ref.transaction((currentViews) => {
    if (currentViews === null) return 1;

    return currentViews + 1;
  });

  return Response.json({ total: snapshot.val() });
}
