ALTER TABLE "products" ALTER COLUMN "price" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "assessment" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "discount" SET DATA TYPE varchar(50);--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "image" text;